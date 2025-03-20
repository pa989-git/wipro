import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const EditJob = () => {
  const navigate = useNavigate();
  const { state } = useLocation();  // ✅ Get job details from navigation state
  const jobData = state?.job;  // ✅ Extract job data

  const [job, setJob] = useState({
    title: jobData?.title || "",
    description: jobData?.description || "",
  });

  useEffect(() => {
    if (!jobData) {
      toast.error("No job details found. Redirecting...");
      navigate("/jobs");  // ✅ Redirect if no job data is available
    }
  }, [jobData, navigate]);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5240/api/jobs/${jobData.id}`, job, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Job updated successfully!");
      navigate("/jobs");  // ✅ Redirect back to Job List
    } catch (error) {
      toast.error("Failed to update job. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Edit Job</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input type="text" name="title" className="form-control" value={job.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={job.description} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;
