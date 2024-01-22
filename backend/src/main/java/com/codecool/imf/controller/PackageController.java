package com.codecool.imf.controller;

import com.codecool.imf.dto.PackageDTO;
import com.codecool.imf.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
public class PackageController {
    private final PackageService packageService;

    @Autowired
    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @GetMapping
    public List<PackageDTO> getAllPackages() {
        System.out.println("controller");
        return packageService.getAllPackages();
    }
}
