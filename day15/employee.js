function getEmployee(emp) {
    return "".concat(emp.id, " ").concat(emp.name, " ").concat(emp.dept);
}
var emp1 = {
    id: 11,
    name: 'Anu',
    dept: 'HR'
};
console.log(getEmployee(emp1));
//object destructuring
function getEmployeeobjdestruc(_a) {
    var name = _a.name, dept = _a.dept;
    return "".concat(name, " ").concat(dept);
}
var emp2 = {
    name: 'Anu',
    dept: 'HR'
};
console.log(getEmployeeobjdestruc(emp2));
