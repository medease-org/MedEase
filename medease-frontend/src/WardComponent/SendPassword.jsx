import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";

const SendPassword = () => {
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [variant, setVariant] = useState("info");

  const handleSendPassword = async () => {
    try {
      const response = await axios.get(`http://localhost:9090/api/user/send-password`, {
        params: { email }
      });
      setVariant("success");
      setResponseMsg(response.data);
    } catch (error) {
      setVariant("danger");
      setResponseMsg(
        error.response?.data || "Something went wrong, please try again!"
      );
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <Card className="shadow p-4">
        <h4 className="mb-3 text-center">Forgot Password</h4>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            className="mt-3 w-100"
            variant="primary"
            onClick={handleSendPassword}
          >
            Send Password
          </Button>
        </Form>
        {responseMsg && (
          <Alert className="mt-3" variant={variant}>
            {responseMsg}
          </Alert>
        )}
      </Card>
    </Container>
  );
};

export default SendPassword;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Card, Alert, Container } from 'react-bootstrap';

// const SendPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState(null);
//   const [variant, setVariant] = useState('success');
//   const [loading, setLoading] = useState(false);

//   const handleSendPassword = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     try {
//       const response = await axios.get(`http://localhost:9090/send-password`, {
//         params: { email },
//       });

//       setVariant('success');
//       setMessage(response.data);
//     } catch (error) {
//       setVariant('danger');
//       if (error.response) {
//         setMessage(error.response.data);
//       } else {
//         setMessage('An error occurred. Please try again.');
//       }
//     }

//     setLoading(false);
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow">
//         <h3 className="text-center mb-3">Forgot Password</h3>
//         <Form onSubmit={handleSendPassword}>
//           <Form.Group className="mb-3">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter your registered email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" disabled={loading} className="w-100">
//             {loading ? 'Sending...' : 'Send Password'}
//           </Button>

//           {message && <Alert variant={variant} className="mt-3">{message}</Alert>}
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default SendPassword;
