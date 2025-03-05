import React from "react";
import { useTaskContext } from "../context/TaskContext";

const TaskList = ({ onDelete }) => {
  const { tasks } = useTaskContext();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} <button onClick={() => onDelete(task.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
