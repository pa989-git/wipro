import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../redux/taskSlice";

function TaskList() {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/add">Add New Task</Link>
      <table border="1">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.TaskId}>
              <td>{task.TaskId}</td>
              <td>{task.TaskName}</td>
              <td>{task.Description}</td>
              <td>{task.Date}</td>
              <td>{task.CreatedByUser}</td>
              <td>
                <Link to={`/edit/${task.TaskId}`}>Edit</Link> |
                <button onClick={() => dispatch(deleteTask(task.TaskId))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
