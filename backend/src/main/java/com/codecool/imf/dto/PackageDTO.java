package com.codecool.imf.dto;

import com.codecool.imf.model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageDTO {
    private Long id;
    private String elem;
    private String area;
    private Integer price;
    private Integer result;

}
