package com.medeasemanagement.dto;



import lombok.Data;

@Data
public class FeedbackDto {
    private String userName;
    private String feedbackText;
    private int rating;
    private int doctorId;
}

