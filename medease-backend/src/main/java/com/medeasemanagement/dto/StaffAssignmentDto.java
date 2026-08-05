package com.medeasemanagement.dto;

import lombok.Data;


@Data
public class StaffAssignmentDto {
    private int id;
    private int staffId;
    private int wardId;
    private int roomId;
    private int bedId;
    private String role;
}
