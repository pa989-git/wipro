import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role") || ""; // ✅ Ensure role is retrieved properly

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        {/* ✅ Centered Navbar Title */}
        <Link className="navbar-brand fw-bold text-primary fs-3 mx-auto" to="/">
          Job Tracker Application
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* ✅ Always Show Home */}
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">Home</Link>
            </li>

            {/* ✅ Show These Only to Employers */}
            {isAuthenticated && userRole.trim().toLowerCase() === "employer" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/add-job">Add Job</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/jobs">Job List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-warning" to="/predefined-jobs">Predefined Jobs</Link>
                </li>
              </>
            )}

            {/* ✅ Show These Only to Freshers & Candidates */}
            {isAuthenticated && (userRole.trim().toLowerCase() === "fresher" || userRole.trim().toLowerCase() === "candidate") && (
              <>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/jobs">Job List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-warning" to="/predefined-jobs">Predefined Jobs</Link>
                </li>
              </>
            )}

            {/* ✅ Logout Button After Login */}
            {isAuthenticated && (
              <li className="nav-item">
                <button className="btn btn-danger ms-3 fw-bold" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
