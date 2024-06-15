package com.codecool.imf.model;

import com.codecool.imf.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserCreator {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostConstruct
    public void initialize() {
        createUserIfNotFound("ethan@citromail.com", "Ethan", "1234", Role.USER);
        createUserIfNotFound("luther@freemail.com", "Luther", "1234", Role.USER);
        createUserIfNotFound("benji@hotmail.com", "Benji", "1234", Role.USER);
    }

    private void createUserIfNotFound(String email, String name, String password, Role role) {
        if (userRepository.findByEmail(email).isEmpty()) {
            User user = User.builder()
                    .name(name)
                    .password(passwordEncoder.encode(password))
                    .email(email)
                    .role(role)
                    .build();
            userRepository.save(user);
        }
    }
}
