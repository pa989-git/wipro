import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(...registerables, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const socket = io("http://localhost:5000");

export default function StockDashboard() {
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState(null);
  const [history, setHistory] = useState([]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{ label: "Stock Price", data: [], borderColor: "#007bff", fill: false }] });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    socket.on("stockUpdate", (data) => {
      setPrice(data.price);
      setChartData((prev) => ({
        labels: [...prev.labels, new Date().toLocaleTimeString()],
        datasets: [{
          ...prev.datasets[0],
          data: [...prev.datasets[0].data, data.price]
        }]
      }));
    });
    return () => socket.off("stockUpdate");
  }, []);

  const handleSubscribe = () => {
    if (symbol) {
      socket.emit("subscribeToStock", symbol);
      setHistory([...history, symbol]);
    }
  };

  return (
    <div className={`container mt-4 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h2 className="text-center">Real-Time Stock Tracker</h2>
      <button className="btn btn-secondary mb-3" onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <div className={`card p-4 shadow-sm ${darkMode ? "bg-secondary text-white" : "bg-white text-dark"}`}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Stock Symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleSubscribe}>
          Track Stock
        </button>
        {price !== null && (
          <h3 className="mt-3">Current Price: ${price.toFixed(2)}</h3>
        )}
        <h5 className="mt-3">Previous Searches:</h5>
        <ul className="list-group">
          {history.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
        <h5 className="mt-4">Stock Price Trends:</h5>
        <div style={{ height: "300px" }}>
          <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: true }, title: { display: true, text: "Stock Price Trend" } } }} />
        </div>
      </div>
    </div>
  );
}
