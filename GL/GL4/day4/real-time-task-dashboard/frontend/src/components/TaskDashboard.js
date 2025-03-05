import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const TaskDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        socket.on("loadTasks", setTasks);
        socket.on("taskUpdated", setTasks);
        return () => socket.disconnect();
    }, []);

    const addTask = () => {
        if (newTask.trim()) {
            const task = { id: Date.now(), title: newTask };
            socket.emit("addTask", task);
            setNewTask("");
        }
    };

    const deleteTask = (id) => socket.emit("deleteTask", id);

    return (
        <div>
            <h1>Task Dashboard (Real-time)</h1>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter task" />
            <button onClick={addTask}>Add Task</button>
            <ul>{tasks.map(task => (
                <li key={task.id}>{task.title} <button onClick={() => deleteTask(task.id)}>X</button></li>
            ))}</ul>
        </div>
    );
};

export default TaskDashboard;
