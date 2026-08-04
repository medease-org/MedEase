import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';

const FeedbackForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    userName: '',
    feedbackText: '',
    rating: '',
    doctorId: '',
  });

  const fetchDoctors = async () => {
    try {
      const res = await axios.get('http://localhost:9090/api/doctor/all'); // Create an endpoint to return doctor list
      setDoctors(res.data);
    } catch (error) {
      console.error('Failed to load doctors', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9090/api/feedback/submit', form);
      alert('Feedback submitted successfully!');
      setForm({ userName: '', feedbackText: '', rating: '', doctorId: '' });
    } catch (err) {
      alert('Error submitting feedback');
    }
  };

  return (
    <Card className="p-4 m-4 shadow">
      <h3 className="mb-3">Submit Feedback</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            value={form.userName}
            onChange={(e) => setForm({ ...form, userName: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.feedbackText}
            onChange={(e) => setForm({ ...form, feedbackText: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating (1-5)</Form.Label>
          <Form.Control
            type="number"
            min={1}
            max={5}
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Doctor</Form.Label>
          <Form.Select
            value={form.doctorId}
            onChange={(e) => setForm({ ...form, doctorId: e.target.value })}
            required
          >
            <option value="">-- Select Doctor --</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                Dr. {doc.firstName} {doc.lastName} ({doc.specialist})
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit Feedback
        </Button>
      </Form>
    </Card>
  );
};

export default FeedbackForm;
