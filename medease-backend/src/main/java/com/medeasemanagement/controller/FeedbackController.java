package com.medeasemanagement.controller;



import com.medeasemanagement.dto.FeedbackDto;
import com.medeasemanagement.dto.FeedbackResponseDto;
import com.medeasemanagement.service.FeedbackService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/submit")
    public ResponseEntity<String> submitFeedback(@RequestBody FeedbackDto feedbackDto) {
        String response = feedbackService.submitFeedback(feedbackDto);
        return ResponseEntity.ok(response);
    }
    
    
    @GetMapping("/all")
    public ResponseEntity<List<FeedbackResponseDto>> getAllFeedback() {
        List<FeedbackResponseDto> feedbackList = feedbackService.getAllFeedback();
        return ResponseEntity.ok(feedbackList);
    }

    
}

