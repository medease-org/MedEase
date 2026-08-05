package com.medeasemanagement.entity;



import javax.persistence.*;

import lombok.Data;

@Data
@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;

    private String feedbackText;

    private int rating;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private User doctor;

    // Getters and Setters
}

