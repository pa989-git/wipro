const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let records = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 }
];

// ✅ Get All Records
app.get("/api/batch", (req, res) => {
  res.json(records);
});

// ✅ Add Record
app.post("/api/batch", (req, res) => {
  const newRecord = { id: Date.now(), ...req.body };
  records.push(newRecord);
  res.json(newRecord);
});

// ✅ Delete Record
app.delete("/api/batch/:id", (req, res) => {
  const { id } = req.params;
  records = records.filter(record => record.id !== parseInt(id));
  res.sendStatus(204);
});

// ✅ Start Server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
