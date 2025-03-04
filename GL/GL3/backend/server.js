const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require("axios");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_FINANCIAL_API_KEY";
const API_URL = "https://api.example.com/stock";

io.on("connection", (socket) => {
  console.log("New client connected");
  
  socket.on("subscribeToStock", async (symbol) => {
    console.log(`Subscribed to ${symbol}`);
    setInterval(async () => {
      try {
        const response = await axios.get(`${API_URL}?symbol=${symbol}&apikey=${API_KEY}`);
        const stockPrice = response.data.price;
        socket.emit("stockUpdate", { symbol, price: stockPrice });
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    }, 5000);
  });
  
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
