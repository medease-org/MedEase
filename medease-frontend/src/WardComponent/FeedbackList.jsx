import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner, Container, Card } from "react-bootstrap";

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get("http://localhost:9090/api/feedback/all");
      setFeedbackList(res.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <Container className="my-4">
      <Card className="shadow border-0">
        <Card.Header className="bg-primary text-white">
          <h4 className="mb-0 text-center">🌟 Patient Feedback & Ratings</h4>
        </Card.Header>
        <Card.Body style={{ overflowX: "auto" }}>
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2">Loading feedback...</p>
            </div>
          ) : (
            <Table responsive bordered hover className="text-center align-middle">
              <thead className="table-secondary">
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Doctor Name</th>
                  <th>Feedback</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {feedbackList.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">
                      No feedback available.
                    </td>
                  </tr>
                ) : (
                  feedbackList.map((fb, index) => (
                    <tr key={fb.id}>
                      <td>{index + 1}</td>
                      <td className="fw-bold">{fb.userName}</td>
                      <td className="text-primary">{fb.doctorName}</td>
                      <td className="text-wrap">{fb.feedbackText}</td>
                      <td>
                        {"⭐".repeat(fb.rating)}{" "}
                        <small className="text-muted">({fb.rating}/5)</small>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FeedbackList;
