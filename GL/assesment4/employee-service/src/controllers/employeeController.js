const employees = [
    { id: 1, name: "John Doe", address: "123 Main St", dept: "IT", manager: "Alice" },
    { id: 2, name: "Jane Smith", address: "456 Park Ave", dept: "HR", manager: "Bob" }
];

exports.getEmployees = (req, res) => res.json(employees);

exports.getEmployeeById = (req, res) => {
    const employee = employees.find(emp => emp.id == req.params.id);
    employee ? res.json(employee) : res.status(404).json({ message: "Employee not found" });
};

exports.addEmployee = (req, res) => {
    const newEmployee = { id: employees.length + 1, ...req.body };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
};

exports.updateEmployee = (req, res) => {
    const index = employees.findIndex(emp => emp.id == req.params.id);
    if (index !== -1) {
        employees[index] = { ...employees[index], ...req.body };
        res.json(employees[index]);
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
};

exports.deleteEmployee = (req, res) => {
    const index = employees.findIndex(emp => emp.id == req.params.id);
    if (index !== -1) {
        employees.splice(index, 1);
        res.json({ message: "Employee deleted" });
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
};
