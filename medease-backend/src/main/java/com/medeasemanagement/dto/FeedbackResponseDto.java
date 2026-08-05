package com.medeasemanagement.dto;



import lombok.Data;

@Data
public class FeedbackResponseDto {
    private Long id;
    private String userName;
    private String feedbackText;
    private int rating;
    private String doctorName;
}

