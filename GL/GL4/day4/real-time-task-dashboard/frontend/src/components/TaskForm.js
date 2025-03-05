import React, { useState } from "react";

const TaskForm = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(initialTask?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 bg-white rounded-lg shadow">
      <input className="border p-2 w-full" type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 w-full" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Task</button>
    </form>
  );
};

export default TaskForm;
