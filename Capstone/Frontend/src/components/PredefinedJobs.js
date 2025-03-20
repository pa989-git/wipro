import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap"; // ✅ Bootstrap for modal

const PredefinedJobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", company: "Wipro", location: "Bangalore, India", applyLink: "https://careers.wipro.com", applicants: 12, status: "Open" },
    { id: 2, title: "Full Stack Developer", company: "Google", location: "Remote", applyLink: "https://careers.google.com", applicants: 5, status: "Open" },
    { id: 3, title: "Data Analyst", company: "Amazon", location: "Hyderabad, India", applyLink: "https://amazon.jobs", applicants: 20, status: "Closed" },
    { id: 4, title: "Cloud Engineer", company: "Wipro", location: "Remote", applyLink: "https://careers.wipro.com", applicants: 898, status: "Closed" },
    { id: 5, title: "Cyber Security Analyst", company: "Wipro", location: "Chennai, India", applyLink: "https://careers.wipro.com", applicants: 100, status: "Open" },
    { id: 6, title: "Software Engineer", company: "Google", location: "Remote", applyLink: "https://careers.google.com", applicants: 20, status: "Open" },
    { id: 7, title: "Frontend Developer", company: "Microsoft", location: "Bangalore, India", applyLink: "https://careers.microsoft.com", applicants: 88, status: "Open" },
    { id: 8, title: "Backend Developer", company: "Amazon", location: "Hyderabad, India", applyLink: "https://amazon.jobs", applicants: 299, status: "Closed" },
    { id: 9, title: "AI Engineer", company: "OpenAI", location: "San Francisco, USA", applyLink: "https://openai.com/careers", applicants: 299, status: "Open" },
    { id: 10, title: "Data Scientist", company: "Facebook", location: "London, UK", applyLink: "https://www.metacareers.com", applicants: 299, status: "Open" },
  ]);

  const [userRole, setUserRole] = useState(""); // ✅ Track user role
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [interviewDate, setInterviewDate] = useState("");

  // ✅ Get the role from localStorage
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role) {
      setUserRole(role.trim().toLowerCase()); // ✅ Fix: Trim spaces & convert to lowercase
      console.log("Logged-in Role:", role.trim().toLowerCase()); // ✅ Debugging
    }
  }, []);

  // ✅ Open modal for interview scheduling
  const handleSchedule = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  // ✅ Confirm interview schedule
  const handleConfirmSchedule = () => {
    setJobs(jobs.map(job => job.id === selectedJob.id ? { ...job, interviewScheduled: true } : job));
    setShowModal(false);
    alert(`Interview scheduled for ${selectedJob.title} on ${interviewDate}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Predefined Jobs</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Applicants</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td className="fw-bold">{job.applicants}</td>
                <td className={job.status === "Open" ? "text-success fw-bold" : "text-danger fw-bold"}>
                  {job.status}
                </td>
                <td>
                  {userRole === "employer" ? ( // ✅ Only Employers See This
                    job.interviewScheduled ? (
                      <span className="text-primary fw-bold">Interview Scheduled</span>
                    ) : (
                      <button className="btn btn-warning btn-sm" onClick={() => handleSchedule(job)}>
                        Schedule Interview
                      </button>
                    )
                  ) : (
                    <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">
                      Apply Now
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Bootstrap Modal for Interview Scheduling */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Interview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedJob && (
            <div>
              <p><strong>Job Title:</strong> {selectedJob.title}</p>
              <p><strong>Company:</strong> {selectedJob.company}</p>
              <Form.Group>
                <Form.Label>Select Interview Date & Time</Form.Label>
                <Form.Control type="datetime-local" onChange={(e) => setInterviewDate(e.target.value)} />
              </Form.Group>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleConfirmSchedule}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PredefinedJobs;
