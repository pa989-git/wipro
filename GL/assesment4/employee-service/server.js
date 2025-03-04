const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const employeeRoutes = require("./src/routes/employeeRoutes");
app.use("/api/employees", employeeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
