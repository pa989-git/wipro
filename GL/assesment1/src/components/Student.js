import React from "react";
const Student = ({ name, address, scores }) => (
    <div>
        <h3>Student Details</h3>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Scores: {scores.join(', ')}</p>
    </div>
);
export default Student;
