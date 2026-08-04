import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                  >
                  <b className="">About Us</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  <b className="">Contact Us</b>
                </Link>
              </li>
            </ul>

    </div>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link to="/user/patient/register" className="nav-link active" aria-current="page">
          <b className="btn btn-primary">I am a Patient</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/login" className="nav-link active" aria-current="page">
          <b className="btn btn-success">Login</b>
        </Link>
      </li>
    </ul>
  </>
  );
};

export default NormalHeader;
