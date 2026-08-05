package com.medeasemanagement.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medeasemanagement.dao.FeedbackRepository;
import com.medeasemanagement.dao.UserDao;
import com.medeasemanagement.dto.FeedbackDto;
import com.medeasemanagement.dto.FeedbackResponseDto;
import com.medeasemanagement.entity.Feedback;
import com.medeasemanagement.entity.User;

import com.medeasemanagement.service.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserDao userRepository;

    @Override
    public String submitFeedback(FeedbackDto feedbackDto) {
        User doctor = userRepository.findById(feedbackDto.getDoctorId());
        if (doctor == null) {
            return "Doctor not found.";
        }

        Feedback feedback = new Feedback();
        feedback.setUserName(feedbackDto.getUserName());
        feedback.setFeedbackText(feedbackDto.getFeedbackText());
        feedback.setRating(feedbackDto.getRating());
        feedback.setDoctor(doctor);

        feedbackRepository.save(feedback);
        return "Feedback submitted successfully.";
    }
    
    @Override
    public List<FeedbackResponseDto> getAllFeedback() {
        List<Feedback> feedbacks = feedbackRepository.findAll();
        return feedbacks.stream().map(fb -> {
            FeedbackResponseDto dto = new FeedbackResponseDto();
            dto.setId(fb.getId());
            dto.setUserName(fb.getUserName());
            dto.setFeedbackText(fb.getFeedbackText());
            dto.setRating(fb.getRating());
            if (fb.getDoctor() != null) {
                dto.setDoctorName(fb.getDoctor().getFirstName() + " " + fb.getDoctor().getLastName());
            } else {
                dto.setDoctorName("N/A");
            }
            return dto;
        }).toList();
    }

    
}

