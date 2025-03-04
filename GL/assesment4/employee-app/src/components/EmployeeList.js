import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        getEmployees().then(response => setEmployees(response.data));
    };

    const handleDelete = (id) => {
        deleteEmployee(id).then(() => loadEmployees());
    };

    return (
        <div className="container mt-4">
            <h2>Employee List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Manager</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.address}</td>
                            <td>{emp.dept}</td>
                            <td>{emp.manager}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
