const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
const Task = require("./models/Task");
const connectDB = require("./db");

connectDB();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  Task.find().then((tasks) => socket.emit("loadTasks", tasks));

  socket.on("addTask", async (taskData) => {
    const task = new Task(taskData);
    await task.save();
    io.emit("taskUpdated", await Task.find());
  });

  socket.on("deleteTask", async (taskId) => {
    await Task.findByIdAndDelete(taskId);
    io.emit("taskUpdated", await Task.find());
  });

  socket.on("disconnect", () => console.log("User disconnected:", socket.id));
});

server.listen(5000, () => console.log("Server running on port 5000"));
