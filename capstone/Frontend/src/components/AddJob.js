import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    title: "",
    company: "",
    description: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in. Please log in first.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5240/api/jobs",
        job,
        {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        }
      );

      alert("Job added successfully!");
      navigate("/jobs"); // ✅ Redirect to Job List after adding
    } catch (error) {
      console.error("Error adding job:", error);
      alert(error.response?.data?.message || "Failed to add job");
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input type="text" name="title" className="form-control" value={job.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Company</label>
          <input type="text" name="company" className="form-control" value={job.company} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Job Description</label>
          <textarea name="description" className="form-control" value={job.description} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
