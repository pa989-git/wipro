import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1 className="mt-4 text-center">Employee Management</h1>
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/add" element={<EmployeeForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
