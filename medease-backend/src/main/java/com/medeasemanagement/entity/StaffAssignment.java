package com.medeasemanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class StaffAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private User staff; // This is the full User entity, not just staffId

    @ManyToOne
    private Ward ward;

    @ManyToOne
    private Room room;

    @ManyToOne
    private Bed bed; // ✅ Add this to fix setBed() error

    private String role; // Nurse, Cleaner, etc.
}


