// import { useState, useEffect } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";

// const DoctorRegister = () => {
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
//     specialist: "",
//     experience: "",
//   });

//   user.role = "doctor";

//   const [selectedImage, setSelectedImage] = useState(null);

//   console.log("ROLE FECTHED : " + user.role);

//   const handleUserInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const [genders, setGenders] = useState([]);
//   const [specialists, setSpecialists] = useState([]);

//   const retrieveAllGenders = async () => {
//     const response = await axios.get("http://localhost:9090/api/user/gender");
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

//     const getAllSpecialist = async () => {
//       const allSpecialist = await retrieveAllSpecialist();
//       if (allSpecialist) {
//         setSpecialists(allSpecialist);
//       }
//     };

//     getAllGenders();
//     getAllSpecialist();
//   }, []);

//   const saveUser = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("image", selectedImage);
//     formData.append("firstName", user.firstName);
//     formData.append("lastName", user.lastName);
//     formData.append("emailId", user.emailId);
//     formData.append("password", user.password);
//     formData.append("contact", user.contact);
//     formData.append("street", user.street);
//     formData.append("city", user.city);
//     formData.append("pincode", user.pincode);
//     formData.append("role", user.role);
//     formData.append("age", user.age);
//     formData.append("sex", user.sex);
//     formData.append("specialist", user.specialist);
//     formData.append("experience", user.experience);

//     axios
//     .post("http://localhost:9090/api/doctor/register", formData)
//     .then((result) => {
//       if (result.status === 200) {
//         toast.success("Doctor Registered Successfully!!!", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       } else {
//         toast.error("Doctor Registration Failed!!!", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     })
//     .catch((error) => {
//       console.error("Error registering doctor:", error);
//       toast.error("Doctor Registration Failed!!!", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     });
// };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
//         <div
//           className="card form-card border-color  custom-bg"
//           style={{ width: "50rem" }}
//         >
//           <div className="card-header bg-color custom-bg-text text-center" style={{backgroundColor:"#3282b8"}}>
//             <h5 className="card-title">Register {user.role}</h5>
//           </div>
//           <div className="card-body">
//             <form className="row g-3" onSubmit={saveUser}>
//               <div className="col-md-6 mb-3 ">
//                 <label htmlFor="title" className="form-label">
//                   <b> First Name</b>
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
//                   <b>Last Name</b>
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

//               <div className="col-md-6 mb-3 ">
//                 <b>
//                   <label className="form-label">Email Id</label>
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
//                   <b>Password</b>
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

//                   {genders.map((gender) => {
//                     return <option value={gender}> {gender} </option>;
//                   })}
//                 </select>
//               </div>

//               <div className="col-md-6 mb-3 ">
//                 <label htmlFor="bloodGroup" className="form-label">
//                   <b>Specialist</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="specialist"
//                 >
//                   <option value="">Select Specialist</option>

//                   {specialists.map((s) => {
//                     return <option value={s}> {s} </option>;
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
//                 <label htmlFor="contact" className="form-label">
//                   <b>Experience</b>
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="experience"
//                   name="experience"
//                   onChange={handleUserInput}
//                   value={user.experience}
//                 />
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="description" className="form-label">
//                   <b>Street</b>
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
//                   <b>City</b>
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
//                   <b>Pincode</b>
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

//               <div className="col-md-6 mb-3">
//                 <label htmlFor="image3" className="form-label">
//                   <b> Select Doctor Image</b>
//                 </label>
//                 <input
//                   className="form-control"
//                   type="file"
//                   id="image"
//                   name="image"
//                   onChange={(e) => setSelectedImage(e.target.files[0])}
//                 />
//               </div>

//               <div className="d-flex aligns-items-center justify-content-center">
//                 <input
//                   type="submit"
//                   className="btn btn-success"
//                   value="Register Doctor"
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

// export default DoctorRegister;

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [genders, setGenders] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/api/user/gender").then((res) => setGenders(res.data.genders || []));
    axios.get("http://localhost:9090/api/doctor/specialist/all").then((res) => setSpecialists(res.data || []));
  }, []);

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
      specialist: "",
      experience: "",
      role: "doctor",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      emailId: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      contact: Yup.string().matches(/^\d{10}$/, "Contact must be 10 digits").required("Contact is required"),
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      pincode: Yup.string().matches(/^\d{6}$/, "Pincode must be 6 digits").required("Pincode is required"),
      age: Yup.number().min(18, "Age must be at least 18").required("Age is required"),
      sex: Yup.string().required("Gender is required"),
      specialist: Yup.string().required("Specialist is required"),
      experience: Yup.number().min(0, "Experience must be positive").required("Experience is required"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      if (selectedImage) formData.append("image", selectedImage);

      try {
        const result = await axios.post("http://localhost:9090/api/doctor/register", formData);
        toast.success("Doctor Registered Successfully!", { position: "top-center" });
      } catch (error) {
        toast.error("Doctor Registration Failed!", { position: "top-center" });
      }
    },
  });

  return (
    <div className="mt-2 d-flex justify-content-center ms-2 me-2 mb-5">
      <div className="card form-card border-color" style={{ width: "50rem" }}>
        <div className="card-header text-center text-white" style={{ backgroundColor: "#3282b8" }}>
          <h5 className="card-title">Register Doctor</h5>
        </div>
        <div className="card-body">
          <form className="row g-3" onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
              { label: "Email Id", name: "emailId", type: "email" },
              { label: "Password", name: "password", type: "password" },
              { label: "Contact No", name: "contact", type: "text" },
              { label: "Age", name: "age", type: "number" },
              { label: "Experience", name: "experience", type: "number" },
              { label: "Street", name: "street", type: "text" },
              { label: "City", name: "city", type: "text" },
              { label: "Pincode", name: "pincode", type: "text" },
            ].map(({ label, name, type }) => (
              <div className="col-md-6 mb-3" key={name}>
                <label className="form-label"><b>{label}</b></label>
                <input
                  type={type}
                  className={`form-control ${formik.touched[name] && formik.errors[name] ? "is-invalid" : ""}`}
                  {...formik.getFieldProps(name)}
                />
                <div className="invalid-feedback">{formik.errors[name]}</div>
              </div>
            ))}

            {/* Gender Select */}
            <div className="col-md-6 mb-3">
              <label className="form-label"><b>User Gender</b></label>
              <select
                className={`form-control ${formik.touched.sex && formik.errors.sex ? "is-invalid" : ""}`}
                {...formik.getFieldProps("sex")}
              >
                <option value="">Select Gender</option>
                {genders.map((g, idx) => <option key={idx} value={g}>{g}</option>)}
              </select>
              <div className="invalid-feedback">{formik.errors.sex}</div>
            </div>

            {/* Specialist Select */}
            <div className="col-md-6 mb-3">
              <label className="form-label"><b>Specialist</b></label>
              <select
                className={`form-control ${formik.touched.specialist && formik.errors.specialist ? "is-invalid" : ""}`}
                {...formik.getFieldProps("specialist")}
              >
                <option value="">Select Specialist</option>
                {specialists.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
              </select>
              <div className="invalid-feedback">{formik.errors.specialist}</div>
            </div>

            {/* Image Upload */}
            <div className="col-md-6 mb-3">
              <label className="form-label"><b>Select Doctor Image</b></label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success">Register Doctor</button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
