// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Button, Form, Table, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const API_URL = "http://localhost:9090/api/staff-assignments";

// const StaffComponent = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [assignment, setAssignment] = useState({
//     staffId: "",
//     wardId: "",
//     roomId: "",
//     bedId: "",
//     role: "",
//   });
//   const [editingStaffId, setEditingStaffId] = useState(null);

//   useEffect(() => {
//     fetchAssignments();
//   }, []);

//   const fetchAssignments = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setAssignments(res.data);
//     } catch (err) {
//       alert("Error fetching assignments");
//     }
//   };

//   const handleChange = (e) => {
//     setAssignment({ ...assignment, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingStaffId) {
//         await axios.put(`${API_URL}/${editingStaffId}`, assignment);
//       } else {
//         await axios.post(API_URL, assignment);
//       }
//       resetForm();
//       fetchAssignments();
//     } catch (err) {
//       alert("Error saving assignment");
//     }
//   };

//   const resetForm = () => {
//     setAssignment({ staffId: "", wardId: "", roomId: "", bedId: "", role: "" });
//     setEditingStaffId(null);
//   };

//   const handleEdit = (a) => {
//     setAssignment({
//       staffId: a.staffId,
//       wardId: a.wardId,
//       roomId: a.roomId,
//       bedId: a.bedId,
//       role: a.role,
//     });
//     setEditingStaffId(a.staffId);
//   };

//   const handleDelete = async (staffId) => {
//     if (window.confirm("Are you sure to delete?")) {
//       await axios.delete(`${API_URL}/${staffId}`);
//       fetchAssignments();
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card className="shadow p-4 mb-4 text-center">
//             <Card.Title className="mb-3">
//               {editingStaffId ? "Update Assignment" : "Assign Staff"}
//             </Card.Title>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Staff ID</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="staffId"
//                   value={assignment.staffId}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Ward ID</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="wardId"
//                   value={assignment.wardId}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Room ID</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="roomId"
//                   value={assignment.roomId}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Bed ID</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="bedId"
//                   value={assignment.bedId}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-4">
//                 <Form.Label>Role</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="role"
//                   value={assignment.role}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Button variant={editingStaffId ? "warning" : "primary"} type="submit" className="w-100">
//                 {editingStaffId ? "Update Assignment" : "Assign Staff"}
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>

//       <h4 className="text-center mt-4 mb-3">All Staff Assignments</h4>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Staff ID</th>
//             <th>Ward ID</th>
//             <th>Room ID</th>
//             <th>Bed ID</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {assignments.map((a) => (
//             <tr key={a.id}>
//               <td>{a.id}</td>
//               <td>{a.staffId}</td>
//               <td>{a.wardId}</td>
//               <td>{a.roomId}</td>
//               <td>{a.bedId}</td>
//               <td>{a.role}</td>
//               <td>
//                 <Button variant="info" size="sm" onClick={() => handleEdit(a)} className="me-2">
//                   Edit
//                 </Button>
//                 <Button variant="danger" size="sm" onClick={() => handleDelete(a.staffId)}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default StaffComponent;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Form, Table, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://localhost:9090/api";

const StaffComponent = () => {
  const [assignments, setAssignments] = useState([]);
  const [assignment, setAssignment] = useState({
    staffId: "",
    wardId: "",
    roomId: "",
    bedId: "",
    role: "",
  });

  const [wards, setWards] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [beds, setBeds] = useState([]);
  const [editingStaffId, setEditingStaffId] = useState(null);

  useEffect(() => {
    fetchAssignments();
    fetchDropdowns();
  }, []);

  const fetchAssignments = async () => {
    try {
      const res = await axios.get(`${API_URL}/staff-assignments`);
      setAssignments(res.data);
    } catch (err) {
      alert("Error fetching assignments");
    }
  };

  const fetchDropdowns = async () => {
    try {
      const [wardsRes, roomsRes, bedsRes] = await Promise.all([
        axios.get(`${API_URL}/wards`),
        axios.get(`${API_URL}/rooms`),
        axios.get(`${API_URL}/beds`)
      ]);
      setWards(wardsRes.data);
      setRooms(roomsRes.data);
      setBeds(bedsRes.data);
    } catch (err) {
      alert("Error fetching dropdown data");
    }
  };

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingStaffId) {
        await axios.put(`${API_URL}/staff-assignments/${editingStaffId}`, assignment);
      } else {
        await axios.post(`${API_URL}/staff-assignments`, assignment);
      }
      resetForm();
      fetchAssignments();
    } catch (err) {
      alert("Error saving assignment");
    }
  };

  const resetForm = () => {
    setAssignment({ staffId: "", wardId: "", roomId: "", bedId: "", role: "" });
    setEditingStaffId(null);
  };

  const handleEdit = (a) => {
    setAssignment({
      staffId: a.staffId,
      wardId: a.wardId,
      roomId: a.roomId,
      bedId: a.bedId,
      role: a.role,
    });
    setEditingStaffId(a.staffId);
  };

  const handleDelete = async (staffId) => {
    if (window.confirm("Are you sure to delete?")) {
      await axios.delete(`${API_URL}/staff-assignments/${staffId}`);
      fetchAssignments();
    }
  };

  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow p-4 mb-4 text-center">
            <Card.Title className="mb-3">
              {editingStaffId ? "Update Assignment" : "Assign Staff"}
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Staff ID</Form.Label>
                <Form.Control
                  type="number"
                  name="staffId"
                  value={assignment.staffId}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ward</Form.Label>
                <Form.Select
                  name="wardId"
                  value={assignment.wardId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Ward</option>
                  {wards.map((ward) => (
                    <option key={ward.id} value={ward.id}>
                      {ward.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Room</Form.Label>
                <Form.Select
                  name="roomId"
                  value={assignment.roomId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Room</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.number}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Bed</Form.Label>
                <Form.Select
                  name="bedId"
                  value={assignment.bedId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Bed</option>
                  {beds.map((bed) => (
                    <option key={bed.id} value={bed.id}>
                      {bed.bedNumber}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  value={assignment.role}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant={editingStaffId ? "warning" : "primary"}
                type="submit"
                className="w-100"
              >
                {editingStaffId ? "Update Assignment" : "Assign Staff"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <h4 className="text-center mt-4 mb-3">All Staff Assignments</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Staff ID</th>
            <th>Ward ID</th>
            <th>Room ID</th>
            <th>Bed ID</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.staffId}</td>
              <td>{a.wardId}</td>
              <td>{a.roomId}</td>
              <td>{a.bedId}</td>
              <td>{a.role}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleEdit(a)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(a.staffId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StaffComponent;
