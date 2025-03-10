import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [task, setTask] = useState({
    TaskId: "",
    TaskName: "",
    Description: "",
    Date: "",
    CreatedByUser: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask(task));
    navigate("/");
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input name="TaskId" placeholder="Task ID" onChange={handleChange} required />
        <input name="TaskName" placeholder="Task Name" onChange={handleChange} required />
        <input name="Description" placeholder="Description" onChange={handleChange} required />
        <input name="Date" type="date" onChange={handleChange} required />
        <input name="CreatedByUser" placeholder="Created By" onChange={handleChange} required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
