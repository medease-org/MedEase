// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Row, Col, Badge, Container, Spinner } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const API_BASE = "http://localhost:9090/api";

// const HospitalStatusDashboard = () => {
//   const [wards, setWards] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [beds, setBeds] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const wardRes = await axios.get(`${API_BASE}/wards`);
//         const roomRes = await axios.get(`${API_BASE}/rooms`);
//         const bedRes = await axios.get(`${API_BASE}/beds`);
//         setWards(wardRes.data);
//         setRooms(roomRes.data);
//         setBeds(bedRes.data);
//       } catch (error) {
//         alert("Failed to load hospital data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAll();
//   }, []);

//   const countBedStatus = (status) => beds.filter((b) => b.status === status).length;

//   if (loading) {
//     return (
//       <div className="text-center mt-5">
//         <Spinner animation="border" variant="primary" />
//       </div>
//     );
//   }

//   return (
//     <Container className="my-4">
//       <h3 className="text-center mb-4">🏥 Hospital Overview Dashboard</h3>

//       <Row className="mb-4">
//         <Col md={6}>
//           <Card className="shadow p-3">
//             <Card.Title className="text-center">Wards</Card.Title>
//             <Row>
//               <Col>
//                 <h5>
//                   Available:{" "}
//                   <Badge bg="success">
//                     {wards.filter((w) => w.status === "Available").length}
//                   </Badge>
//                 </h5>
//               </Col>
//               <Col>
//                 <h5>
//                   Closed:{" "}
//                   <Badge bg="danger">
//                     {wards.filter((w) => w.status === "Closed").length}
//                   </Badge>
//                 </h5>
//               </Col>
//             </Row>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card className="shadow p-3">
//             <Card.Title className="text-center">Rooms</Card.Title>
//             <h5 className="text-center">
//               Available Rooms:{" "}
//               <Badge bg="info">
//                 {rooms.filter((r) => r.available === true).length}
//               </Badge>
//             </h5>
//           </Card>
//         </Col>
//       </Row>

//       <Card className="shadow p-4">
//         <Card.Title className="text-center mb-3">Beds Status</Card.Title>
//         <Row>
//           <Col md={4}>
//             <h5>
//               Available:{" "}
//               <Badge bg="success">{countBedStatus("Available")}</Badge>
//             </h5>
//           </Col>
//           <Col md={4}>
//             <h5>
//               Occupied:{" "}
//               <Badge bg="warning" text="dark">
//                 {countBedStatus("Occupied")}
//               </Badge>
//             </h5>
//           </Col>
//           <Col md={4}>
//             <h5>
//               Maintenance:{" "}
//               <Badge bg="secondary">{countBedStatus("Maintenance")}</Badge>
//             </h5>
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// };

// export default HospitalStatusDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HospitalStatusDashboard = () => {
  const [wards, setWards] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [beds, setBeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const wardRes = await axios.get('http://localhost:9090/api/wards');
      const roomRes = await axios.get('http://localhost:9090/api/rooms');
      const bedRes = await axios.get('http://localhost:9090/api/beds');

      setWards(wardRes.data);
      setRooms(roomRes.data);
      setBeds(bedRes.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hospital data", error);
    }
  };

  const countByStatus = (data, statusField, value) =>
    data.filter(item => item[statusField] === value).length;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Hospital Resource Overview</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          {/* Ward Section */}
          <Row className="justify-content-center mb-4">
            <Col md={4}>
              <Card className="text-center shadow rounded border-success">
                <Card.Body>
                  <Card.Title>Available Wards</Card.Title>
                  <h3 className="text-success">
                    {countByStatus(wards, 'status', 'Available')}
                  </h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow rounded border-danger">
                <Card.Body>
                  <Card.Title>Closed Wards</Card.Title>
                  <h3 className="text-danger">
                    {countByStatus(wards, 'status', 'Closed')}
                  </h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Room Section */}
          <Row className="justify-content-center mb-4">
            <Col md={6}>
              <Card className="text-center shadow rounded border-primary">
                <Card.Body>
                  <Card.Title>Available Rooms</Card.Title>
                  <h3 className="text-primary">
                    {rooms.length}
                  </h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Bed Section */}
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="text-center shadow border-success">
                <Card.Body>
                  <Card.Title>Available Beds</Card.Title>
                  <h3 className="text-success">
                    {countByStatus(beds, 'status', 'Available')}
                  </h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow border-warning">
                <Card.Body>
                  <Card.Title>Occupied Beds</Card.Title>
                  <h3 className="text-warning">
                    {countByStatus(beds, 'status', 'Occupied')}
                  </h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow border-secondary">
                <Card.Body>
                  <Card.Title>Maintenance Beds</Card.Title>
                  <h3 className="text-secondary">
                    {countByStatus(beds, 'status', 'Maintenance')}
                  </h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default HospitalStatusDashboard;
