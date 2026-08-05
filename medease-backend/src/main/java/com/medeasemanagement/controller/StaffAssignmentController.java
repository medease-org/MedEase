package com.medeasemanagement.controller;



import com.medeasemanagement.dto.StaffAssignmentDto;
import com.medeasemanagement.service.StaffAssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/staff-assignments")
@CrossOrigin(origins = "http://localhost:3000")
public class StaffAssignmentController {

    @Autowired
    private StaffAssignmentService staffAssignmentService;

    // ➕ Assign staff to ward, room, bed
    @PostMapping
    public ResponseEntity<StaffAssignmentDto> assignStaff(@RequestBody StaffAssignmentDto dto) {
        StaffAssignmentDto saved = staffAssignmentService.assignStaff(dto);
        return ResponseEntity.ok(saved);
    }

    // 📃 Get all staff assignments
    @GetMapping
    public ResponseEntity<List<StaffAssignmentDto>> getAllAssignments() {
        List<StaffAssignmentDto> list = staffAssignmentService.getAllAssignments();
        return ResponseEntity.ok(list);
    }

    // 🔍 Get assignment by staff ID
    @GetMapping("/{staffId}")
    public ResponseEntity<StaffAssignmentDto> getAssignmentByStaffId(@PathVariable int staffId) {
        StaffAssignmentDto dto = staffAssignmentService.getAssignmentByStaffId(staffId);
        return ResponseEntity.ok(dto);
    }

    // ✏️ Update staff assignment
    @PutMapping("/{staffId}")
    public ResponseEntity<StaffAssignmentDto> updateAssignment(@PathVariable int staffId, @RequestBody StaffAssignmentDto dto) {
        StaffAssignmentDto updated = staffAssignmentService.updateAssignment(staffId, dto);
        return ResponseEntity.ok(updated);
    }

    // ❌ Delete staff assignment
    @DeleteMapping("/{staffId}")
    public ResponseEntity<String> deleteAssignment(@PathVariable int staffId) {
        staffAssignmentService.deleteAssignment(staffId);
        return ResponseEntity.ok("Assignment deleted for staff ID: " + staffId);
    }
}

