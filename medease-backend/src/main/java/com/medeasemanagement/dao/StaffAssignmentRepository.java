package com.medeasemanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.google.common.base.Optional;
import com.medeasemanagement.entity.StaffAssignment;

public interface StaffAssignmentRepository extends JpaRepository<StaffAssignment, Integer> {
	Optional<StaffAssignment> findByStaffId(int staffId);
}
