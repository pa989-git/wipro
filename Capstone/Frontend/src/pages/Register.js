import React, { useState } from "react";
import { register } from "../services/authService";  
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    setError("");

    try {
      await register(user);
      setMessage("Registration successful! You can now log in.");
      setTimeout(() => navigate("/login"), 2000); // Redirect to login
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-6">
        <div className="card p-4 shadow">
          <h2 className="text-center mb-4">Register</h2>
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" name="name" className="form-control" onChange={handleChange} required />
           </div> */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          <p className="mt-3 text-center">
            Already have an account? <button onClick={() => navigate("/login")} className="btn btn-link">Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
