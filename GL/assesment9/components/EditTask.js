import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../redux/taskSlice";
import { useParams, useNavigate } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const tasks = useSelector(state => state.tasks.tasks);
  const existingTask = tasks.find(t => t.TaskId === id);
  const [task, setTask] = useState(existingTask);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTask(task));
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input name="TaskName" value={task.TaskName} onChange={handleChange} required />
        <input name="Description" value={task.Description} onChange={handleChange} required />
        <input name="Date" type="date" value={task.Date} onChange={handleChange} required />
        <input name="CreatedByUser" value={task.CreatedByUser} onChange={handleChange} required />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditTask;
