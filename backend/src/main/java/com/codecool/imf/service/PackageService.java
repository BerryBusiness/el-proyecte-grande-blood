package com.codecool.imf.service;

import com.codecool.imf.dto.PackageDTO;
import com.codecool.imf.dto.UserDTO;
import com.codecool.imf.model.Package;
import com.codecool.imf.model.User;
import com.codecool.imf.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PackageService {

    private final PackageRepository packageRepository;

    @Autowired
    public PackageService(PackageRepository packageRepository) {
        this.packageRepository = packageRepository;
    }

    public List<PackageDTO> getAllPackages() {
        List<Package> allPackages = packageRepository.findAll();
        List<PackageDTO> allPackagesDTO = new ArrayList<>();
        for (Package pkg : allPackages) {
            allPackagesDTO.add(PackageDTO.builder()
                    .id(pkg.getId())
                    .elem(pkg.getElem())
                    .area(pkg.getArea())
                    .price(pkg.getPrice())
                    .result(pkg.getResult())
                    .build());
        }
        return allPackagesDTO;
    }

}
