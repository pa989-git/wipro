import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero-section">
      <div>
        <h1>Welcome to Job Tracker Application</h1>
        <p>Track your job applications effortlessly</p>
        <Link to="/register" className="btn btn-primary btn-lg me-3">Register</Link>
        <Link to="/login" className="btn btn-success btn-lg">Login</Link>
      </div>
    </div>
  );
};

export default Home;
