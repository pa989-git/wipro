import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobList from "./components/JobList";
import AddJob from "./components/AddJob";
import PredefinedJobs from "./components/PredefinedJobs";  // ✅ Import Predefined Jobs
import Navbar from "./components/Navbar";
import EditJob from "./components/EditJob";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
         
        {/* ✅ Show Predefined Jobs Route */}
        {isAuthenticated ? (
          <>
            <Route path="/jobs" element={<JobList />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/predefined-jobs" element={<PredefinedJobs />} />  {/* ✅ Added Route */}
            <Route path="/edit-job/:id" element={<EditJob />} /> {/* ✅ Fix Route */}
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
