package com.medeasemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.medeasemanagement.dao.AppointmentDao;
import com.medeasemanagement.dao.UserDao;
import com.medeasemanagement.entity.Appointment;
import com.medeasemanagement.entity.User;
import com.medeasemanagement.utility.EmailService;

@Repository
public class AppointmentService {
	
	@Autowired
	private AppointmentDao appointmentDao;
	
//	public Appointment addAppointment(Appointment appointment) {
//		return appointmentDao.save(appointment);
//	}
	
	

	@Autowired
	private UserDao patientRepository;

	@Autowired
	private EmailService emailService;

	public Appointment addAppointment(Appointment appointment) {
	    // Save appointment
	    Appointment savedAppointment = appointmentDao.save(appointment);

	    // Fetch patient details
	    User patient = patientRepository.findById(appointment.getPatientId());
	    if (patient == null) {
	        throw new RuntimeException("Patient not found with ID: " + appointment.getPatientId());
	    }

	    // Build email content
	    String toEmail = patient.getEmailId();
	    String subject = "Appointment Confirmation";
//	    String body = "Dear " + patient.getFirstName() + patient.getLastName()+ ",\n\n" +
//	                  "Your appointment has been booked successfully.\n" +
//	                  "Date: " + appointment.getAppointmentDate() + "\n" +
//	                  "Doctor ID: " + appointment.getDoctorId() + "\n" +
//	                  "Prescription:"+appointment.gets+ "\n" +
//	                  "Problem: " + appointment.getProblem() + "\n\n" +
//	                  "Thank you for using MedEase.";

	    StringBuilder body = new StringBuilder();

	    body.append("Dear ")
	        .append(patient.getFirstName())
	        .append(" ")
	        .append(patient.getLastName())
	        .append(",\n\n")
	        .append("Your appointment has been booked successfully.\n")
	        .append("Date: ").append(appointment.getAppointmentDate()).append("\n")
	        .append("Problem: ").append(appointment.getProblem()).append("\n");

	    if (appointment.getDoctorId() != 0) {
	        body.append("Doctor ID: ").append(appointment.getDoctorId()).append("\n");
	    }

	    if (appointment.getPrescription() != null && !appointment.getPrescription().isEmpty()) {
	        body.append("Prescription: ").append(appointment.getPrescription()).append("\n")
	            .append("Price: ").append(appointment.getPrice()).append("\n")
	            .append("Status: ").append(appointment.getStatus()).append("\n");
	    }

	    body.append("\nThank you for using MedEase.");

	    // Send email
	    emailService.sendAppointmentConfirmation(toEmail, subject, body);

	    return savedAppointment;
	}
	
	
	public Appointment getAppointmentById(int id) {
		return appointmentDao.findById(id).get();
	}

	public List<Appointment> getAllAppointment() {
		return appointmentDao.findAll();
	}
	
	public List<Appointment> getAppointmentByPatientId(int patiendId) {
		return appointmentDao.findByPatientId(patiendId);
	}
	
	public List<Appointment> getAppointmentByDoctorId(int doctorId) {
		return appointmentDao.findByDoctorId(doctorId);
	}
	
	
}
