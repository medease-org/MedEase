// import { React,useState, useEffect } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import {useNavigate} from "react-router-dom";
// import axios from "axios";

// const UserRegister = () => {
//   const navigate=useNavigate();
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     password: "",
//     contact: "",
//     street: "",
//     city: "",
//     pincode: "",
//     role: "",
//     age: "",
//     sex: "",
//     bloodGroup: "",
//     specialist: "",
//   });

//   if (document.URL.indexOf("admin") !== -1) {
//     user.role = "admin";
//   } else if (document.URL.indexOf("patient") !== -1) {
//     user.role = "patient";
//   } else if (document.URL.indexOf("doctor") !== -1) {
//     user.role = "doctor";
//   }

//   console.log("ROLE FECTHED : " + user.role);

//   const handleUserInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const [genders, setGenders] = useState([]);
//   const [bloodGroup, setBloodGroup] = useState([]);
//   const [specialists, setSpecialists] = useState([]);

//   const retrieveAllGenders = async () => {
//     const response = await axios.get("http://localhost:9090/api/user/gender");
//     return response.data;
//   };

//   const retrieveAllBloodGroups = async () => {
//     const response = await axios.get(
//       "http://localhost:9090/api/patient/bloodgroup/all"
//     );
//     return response.data;
//   };

//   const retrieveAllSpecialist = async () => {
//     const response = await axios.get(
//       "http://localhost:9090/api/doctor/specialist/all"
//     );
//     return response.data;
//   };

//   useEffect(() => {
//     const getAllGenders = async () => {
//       const allGenders = await retrieveAllGenders();
//       if (allGenders) {
//         setGenders(allGenders.genders);
//       }
//     };

//     const getAllBloodGroup = async () => {
//       const allBloodGroups = await retrieveAllBloodGroups();
//       if (allBloodGroups) {
//         setBloodGroup(allBloodGroups);
//       }
//     };

//     const getAllSpecialist = async () => {
//       const allSpecialist = await retrieveAllSpecialist();
//       if (allSpecialist) {
//         setSpecialists(allSpecialist);
//       }
//     };

//     getAllGenders();
//     getAllBloodGroup();
//     getAllSpecialist();
//   }, []);

//   const saveUser = (event) => {
//     event.preventDefault();
   
//     fetch("http://localhost:9090/api/user/register", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     }).then((result) => {
//       if (result.ok) {
//         toast.success("Registered Successfully!!!", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
  
//         navigate("/user/login"); // Navigate to login page upon successful registration
//       } else {
//         toast.error("Registration Failed!!!", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
  

//       result
//         .json()
//         .then((res) => {
//           console.log("response", res);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
//         <div
//           className="card form-card border-danger"
//           style={{ width: "50rem" }}
//         >
//           <div className="card-header custom-bg-text text-center " style={{backgroundColor:"#3282b8"}}>
//             <h5 className="card-title">Register {user.role}</h5>
//           </div>
//           <div className="card-body">
//             <form className="row g-3" onSubmit={saveUser}>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="title" className="form-label">
//                   <b> First Name :</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="firstName"
//                   name="firstName"
//                   onChange={handleUserInput}
//                   value={user.firstName}
//                 />
//               </div>
//               <div className="col-md-6 mb-3 ">
//                 <label htmlFor="description" className="form-label">
//                   <b>Last Name :</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="lastName"
//                   name="lastName"
//                   onChange={handleUserInput}
//                   value={user.lastName}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <b>
//                   <label className="form-label">Email Id :</label>
//                 </b>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="emailId"
//                   name="emailId"
//                   onChange={handleUserInput}
//                   value={user.emailId}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="quantity" className="form-label">
//                   <b>Password :</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={user.password}
//                 />
//               </div>
//               <div className="col-md-6 mb-3 ">
//                 <label htmlFor="sex" className="form-label">
//                   <b>User Gender</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="sex"
//                 >
//                   <option value="0">Select Gender</option>
//                   {/* <option value="1">Male</option>
//                   <option value="2">Female</option> */}
                  
//                   {genders.map((gender) => {
//                     return <option value={gender}> {gender} </option>;
//                   })}
//                 </select>
//               </div>
//               <div className="col-md-6 mb-3 ">
//                 <label htmlFor="bloodGroup" className="form-label">
//                   <b>Blood Group</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="bloodGroup"
//                 >
//                   <option value="">Select Blood Group</option>
//                   {/* <option value="0">A+</option>
//                   <option value="1">A-</option>
//                   <option value="2">B+</option>
//                   <option value="3">B-</option>
//                   <option value="4">AB+</option>
//                   <option value="5">AB-</option>
//                   <option value="6">O+</option>
//                   <option value="7">O-</option> */}
//                   {bloodGroup.map((bg) => {
//                     return <option value={bg}> {bg} </option>;
//                   })}
//                 </select>
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="contact" className="form-label">
//                   <b>Contact No</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="contact"
//                   name="contact"
//                   onChange={handleUserInput}
//                   value={user.contact}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="contact" className="form-label">
//                   <b>Age</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="age"
//                   name="age"
//                   onChange={handleUserInput}
//                   value={user.age}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="description" className="form-label">
//                   <b> Street :</b>
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="street"
//                   name="street"
//                   rows="3"
//                   onChange={handleUserInput}
//                   value={user.street}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="price" className="form-label">
//                   <b>City :</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="city"
//                   name="city"
//                   onChange={handleUserInput}
//                   value={user.city}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label htmlFor="pincode" className="form-label">
//                   <b>Pincode :</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="pincode"
//                   name="pincode"
//                   onChange={handleUserInput}
//                   value={user.pincode}
//                 />
//               </div>
//               <div className="d-flex aligns-items-center justify-content-center">
//                 <input
//                   type="submit"
//                   className="btn btn-success"
//                   value="Register User"
//                 />
//               </div>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserRegister;


import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const UserRegister = () => {
  const navigate = useNavigate();

  const [genders, setGenders] = useState([]);
  const [bloodGroup, setBloodGroup] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  const role =
    document.URL.indexOf("admin") !== -1
      ? "admin"
      : document.URL.indexOf("doctor") !== -1
      ? "doctor"
      : "patient";

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      contact: "",
      street: "",
      city: "",
      pincode: "",
      age: "",
      sex: "",
      bloodGroup: "",
      specialist: "",
      role: role,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      emailId: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password too short").required("Password is required"),
      contact: Yup.string()
        .matches(/^[0-9]{10}$/, "Contact must be 10 digits")
        .required("Contact number is required"),
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      pincode: Yup.string()
        .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
        .required("Pincode is required"),
      age: Yup.number().min(0).max(120).required("Age is required"),
      sex: Yup.string().required("Gender is required"),
      bloodGroup: Yup.string().required("Blood Group is required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await fetch("http://localhost:9090/api/user/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          toast.success("Registered Successfully!", { position: "top-center", autoClose: 1500 });
          navigate("/user/login");
        } else {
          toast.error("Registration failed!", { position: "top-center", autoClose: 1500 });
        }
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong!", { position: "top-center", autoClose: 1500 });
      }
    },
  });

  const retrieveAllGenders = async () => {
    const response = await axios.get("http://localhost:9090/api/user/gender");
    setGenders(response.data.genders);
  };

  const retrieveAllBloodGroups = async () => {
    const response = await axios.get("http://localhost:9090/api/patient/bloodgroup/all");
    setBloodGroup(response.data);
  };

  const retrieveAllSpecialist = async () => {
    const response = await axios.get("http://localhost:9090/api/doctor/specialist/all");
    setSpecialists(response.data);
  };

  useEffect(() => {
    retrieveAllGenders();
    retrieveAllBloodGroups();
    retrieveAllSpecialist();
  }, []);

  return (
    <div className="container mt-3 mb-5">
      <div className="card shadow border-0 p-4">
        <div className="card-header text-white text-center" style={{ backgroundColor: "#3282b8" }}>
          <h4>Register as {role}</h4>
        </div>
        <form className="row g-3 mt-3" onSubmit={formik.handleSubmit}>
          {/* First Name */}
          <div className="col-md-6">
            <label><b>First Name</b></label>
            <input
              name="firstName"
              type="text"
              className={`form-control ${formik.touched.firstName && formik.errors.firstName ? "is-invalid" : ""}`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.firstName}</div>
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <label><b>Last Name</b></label>
            <input
              name="lastName"
              type="text"
              className={`form-control ${formik.touched.lastName && formik.errors.lastName ? "is-invalid" : ""}`}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.lastName}</div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label><b>Email</b></label>
            <input
              name="emailId"
              type="email"
              className={`form-control ${formik.touched.emailId && formik.errors.emailId ? "is-invalid" : ""}`}
              value={formik.values.emailId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.emailId}</div>
          </div>

          {/* Password */}
          <div className="col-md-6">
            <label><b>Password</b></label>
            <input
              name="password"
              type="password"
              className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.password}</div>
          </div>

          {/* Contact */}
          <div className="col-md-6">
            <label><b>Contact</b></label>
            <input
              name="contact"
              type="text"
              className={`form-control ${formik.touched.contact && formik.errors.contact ? "is-invalid" : ""}`}
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.contact}</div>
          </div>

          {/* Age */}
          <div className="col-md-6">
            <label><b>Age</b></label>
            <input
              name="age"
              type="number"
              className={`form-control ${formik.touched.age && formik.errors.age ? "is-invalid" : ""}`}
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.age}</div>
          </div>

          {/* Street */}
          <div className="col-md-6">
            <label><b>Street</b></label>
            <textarea
              name="street"
              className={`form-control ${formik.touched.street && formik.errors.street ? "is-invalid" : ""}`}
              value={formik.values.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.street}</div>
          </div>

          {/* City */}
          <div className="col-md-6">
            <label><b>City</b></label>
            <input
              name="city"
              className={`form-control ${formik.touched.city && formik.errors.city ? "is-invalid" : ""}`}
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.city}</div>
          </div>

          {/* Pincode */}
          <div className="col-md-6">
            <label><b>Pincode</b></label>
            <input
              name="pincode"
              type="text"
              className={`form-control ${formik.touched.pincode && formik.errors.pincode ? "is-invalid" : ""}`}
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="invalid-feedback">{formik.errors.pincode}</div>
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <label><b>Gender</b></label>
            <select
              name="sex"
              className={`form-control ${formik.touched.sex && formik.errors.sex ? "is-invalid" : ""}`}
              value={formik.values.sex}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Gender</option>
              {genders.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{formik.errors.sex}</div>
          </div>

          {/* Blood Group */}
          <div className="col-md-6">
            <label><b>Blood Group</b></label>
            <select
              name="bloodGroup"
              className={`form-control ${formik.touched.bloodGroup && formik.errors.bloodGroup ? "is-invalid" : ""}`}
              value={formik.values.bloodGroup}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Blood Group</option>
              {bloodGroup.map((bg, index) => (
                <option key={index} value={bg}>
                  {bg}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{formik.errors.bloodGroup}</div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-success px-5">
              Register
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserRegister;
