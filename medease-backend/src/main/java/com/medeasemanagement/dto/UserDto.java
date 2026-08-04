package com.medeasemanagement.dto;


import lombok.Data;

@Data
public class UserDto {
    private int id;
    private String name;
    private String email;
    private String mobile;
    private String gender;
    private String address;
    private String role;
}

