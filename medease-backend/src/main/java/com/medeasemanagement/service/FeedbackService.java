package com.medeasemanagement.service;



import java.util.List;

import com.medeasemanagement.dto.FeedbackDto;
import com.medeasemanagement.dto.FeedbackResponseDto;

public interface FeedbackService {
    String submitFeedback(FeedbackDto feedbackDto);
    List<FeedbackResponseDto> getAllFeedback();
}
