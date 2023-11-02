package com.codecool.imf.controller;

import com.codecool.imf.dto.CheckUserEmailDTO;
import com.codecool.imf.dto.UserDTO;
import com.codecool.imf.security.AuthenticationRequest;
import com.codecool.imf.security.AuthenticationResponse;
import com.codecool.imf.security.AuthenticationService;
import com.codecool.imf.security.RegisterRequest;
import com.codecool.imf.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final AuthenticationService authenticationService;

    @Autowired
    public UserController(UserService userService, AuthenticationService authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable("id") Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/register")
    public ResponseEntity<HttpStatusCode> register(@RequestBody RegisterRequest request) {
        Boolean response = authenticationService.register(request);
        if (response) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostMapping("/checkemail")
    public boolean checkEmail(@RequestBody CheckUserEmailDTO email) {
        return userService.checkEmail(email);
    }

    @PatchMapping("/update/{id}")
    public boolean updateUserById(@PathVariable("id") Long id, @RequestBody UserDTO updatedUser) {
        return userService.updateUserById(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public boolean deleteUserById(@PathVariable("id") Long id) {
        return userService.deleteUserById(id);
    }
}
