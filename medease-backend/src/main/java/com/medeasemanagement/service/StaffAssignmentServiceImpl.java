package com.medeasemanagement.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import java.util.Optional;
import com.google.common.base.Optional;
import com.medeasemanagement.dao.BedRepository;
import com.medeasemanagement.dao.RoomRepository;
import com.medeasemanagement.dao.StaffAssignmentRepository;
import com.medeasemanagement.dao.UserDao;
import com.medeasemanagement.dao.WardRepository;
import com.medeasemanagement.dto.StaffAssignmentDto;
import com.medeasemanagement.entity.Bed;
import com.medeasemanagement.entity.Room;
import com.medeasemanagement.entity.StaffAssignment;
import com.medeasemanagement.entity.User;
import com.medeasemanagement.entity.Ward;

@Service
public class StaffAssignmentServiceImpl implements StaffAssignmentService {

    @Autowired
    private StaffAssignmentRepository staffAssignmentRepository;

    @Autowired
    private WardRepository wardRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private BedRepository bedRepository;

    @Autowired
    private UserDao userRepository;
    
    @Override
    public StaffAssignmentDto assignStaff(StaffAssignmentDto dto) {
        Ward ward = wardRepository.findById(dto.getWardId())
            .orElseThrow(() -> new RuntimeException("Ward not found"));

        Room room = roomRepository.findById(dto.getRoomId())
            .orElseThrow(() -> new RuntimeException("Room not found"));

        Bed bed = bedRepository.findById(dto.getBedId())
            .orElseThrow(() -> new RuntimeException("Bed not found"));

        User staff = userRepository.findById(dto.getStaffId());
        if (staff == null) {
            throw new RuntimeException("Staff (User) not found");
        }

        StaffAssignment assignment = new StaffAssignment();
        assignment.setStaff(staff); // ✅ FIXED HERE
        assignment.setWard(ward);
        assignment.setRoom(room);
        assignment.setBed(bed);
        assignment.setRole(dto.getRole());

        StaffAssignment saved = staffAssignmentRepository.save(assignment);

        return mapToDto(saved);
    }

    @Override
    public List<StaffAssignmentDto> getAllAssignments() {
        List<StaffAssignment> list = staffAssignmentRepository.findAll();
        return list.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @Override
    public StaffAssignmentDto getAssignmentByStaffId(int staffId) {
//        StaffAssignment assignment = staffAssignmentRepository.findByStaffId(staffId)
//            .orElseThrow(() -> new RuntimeException("Assignment not found for staff ID: " + staffId));
        
        Optional<StaffAssignment> optional = staffAssignmentRepository.findByStaffId(staffId);
        StaffAssignment assignment;
        if (optional.isPresent()) {
            assignment = optional.get();
        } else {
            throw new RuntimeException("Assignment not found for staff ID: " + staffId);
        }

        return mapToDto(assignment);
    }

    @Override
    public StaffAssignmentDto updateAssignment(int staffId, StaffAssignmentDto dto) {
    	Optional<StaffAssignment> optional = staffAssignmentRepository.findByStaffId(staffId);
    	StaffAssignment assignment;
    	if (optional.isPresent()) {
    	    assignment = optional.get();
    	} else {
    	    throw new RuntimeException("Assignment not found for staff ID: " + staffId);
    	}


        Ward ward = wardRepository.findById(dto.getWardId())
            .orElseThrow(() -> new RuntimeException("Ward not found"));

        Room room = roomRepository.findById(dto.getRoomId())
            .orElseThrow(() -> new RuntimeException("Room not found"));

        Bed bed = bedRepository.findById(dto.getBedId())
            .orElseThrow(() -> new RuntimeException("Bed not found"));

        User staff = userRepository.findById(dto.getStaffId());
        if (staff == null) {
            throw new RuntimeException("Staff (User) not found");
        }

        assignment.setStaff(staff); // ✅ FIXED
        assignment.setWard(ward);
        assignment.setRoom(room);
        assignment.setBed(bed);
        assignment.setRole(dto.getRole());

        StaffAssignment updated = staffAssignmentRepository.save(assignment);
        return mapToDto(updated);
    }

    @Override
    public void deleteAssignment(int staffId) {
    	Optional<StaffAssignment> optional = staffAssignmentRepository.findByStaffId(staffId);
    	StaffAssignment assignment;
    	if (optional.isPresent()) {
    	    assignment = optional.get();
    	} else {
    	    throw new RuntimeException("Assignment not found for staff ID: " + staffId);
    	}

        staffAssignmentRepository.delete(assignment);
    }

    private StaffAssignmentDto mapToDto(StaffAssignment entity) {
        StaffAssignmentDto dto = new StaffAssignmentDto();
        dto.setId(entity.getId());
        dto.setStaffId(entity.getStaff().getId()); // ✅ FIXED
        dto.setWardId(entity.getWard().getId());
        dto.setRoomId(entity.getRoom().getId());
        dto.setBedId(entity.getBed().getId());
        dto.setRole(entity.getRole());
        return dto;
    }
}

