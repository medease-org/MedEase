package com.medeasemanagement.service;

import java.util.List;

import com.medeasemanagement.dto.StaffAssignmentDto;
import com.medeasemanagement.entity.StaffAssignment;

public interface StaffAssignmentService {
	StaffAssignmentDto assignStaff(StaffAssignmentDto dto);
    List<StaffAssignmentDto> getAllAssignments();
    StaffAssignmentDto getAssignmentByStaffId(int staffId);
    StaffAssignmentDto updateAssignment(int staffId, StaffAssignmentDto dto);
    void deleteAssignment(int staffId);
}
