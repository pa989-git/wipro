import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/JobDetails.css"; // ✅ Import CSS for styling

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in. Please log in first.");
        navigate("/login");
        return;
      }

      const response = await axios.get(`http://localhost:5240/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setJob(response.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
      alert("Failed to fetch job details.");
    }
  };

  return (
    <div className="job-details-container"> {/* ✅ Apply background styling */}
      <div className="job-details-card">
        {job ? (
          <>
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <button className="btn btn-primary mt-3" onClick={() => navigate("/jobs")}>Back to Jobs</button>
          </>
        ) : (
          <p>Loading job details...</p>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
