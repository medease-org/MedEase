import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    window.location.reload(true);
    navigate("/home");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/user/patient/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">View Patients</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/addward"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Add Ward</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/addRoom"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Add Room</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/addBed"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Add Bed</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/assignStaff"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Assign staff</b>
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/availability"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Availability</b>
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/availability"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Availability</b>
        </Link>
      </li>
      

      <li className="nav-item">
        <Link
          to="user/doctor/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">View Doctors</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="admin/appointments/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Check All Appointments</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="admin/allfeedback"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Feedback</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/doctor/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Register Doctor</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="btn btn-danger">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
