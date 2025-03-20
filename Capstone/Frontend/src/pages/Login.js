import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "", role: "Candidate" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5240/api/auth/login", credentials);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", credentials.role.toLowerCase()); // ✅ Store role from dropdown
        setIsAuthenticated(true);

        toast.success(`Login successful as ${credentials.role}!`);

        // ✅ Navigate based on role
        if (credentials.role.toLowerCase() === "employer") {
          navigate("/jobs"); // ✅ Employer sees Job List
        } else {
          navigate("/predefined-jobs"); // ✅ Freshers & Candidates see predefined jobs
        }
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center text-primary fw-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input type="email" name="email" className="form-control" value={credentials.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input type="password" name="password" className="form-control" value={credentials.password} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Select Role</label>
            <select name="role" className="form-select" value={credentials.role} onChange={handleChange}>
              <option value="Candidate">Candidate</option>
              <option value="Fresher">Fresher</option>
              <option value="Employer">Employer</option> {/* ✅ Employer Option Added */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
