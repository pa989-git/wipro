using Microsoft.AspNetCore.Mvc;
using BLL.Models;
using BLL.Services;
using EmployeeManagement.Models;

namespace EmployeeManagement.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly EmployeeService _service;
        public EmployeeController(EmployeeService service) => _service = service;
        public IActionResult Index() => View(_service.GetEmployees());
        public IActionResult Create() => View();
        [HttpPost]
        public IActionResult Create(EmployeeViewModel employee) { if (ModelState.IsValid) { _service.AddEmployee(new Employee { ID = employee.ID, Name = employee.Name, DateOfBirth = employee.DateOfBirth, DateOfJoining = employee.DateOfJoining, Salary = employee.Salary, Dept = employee.Dept, Password = employee.Password }); return RedirectToAction("Index"); } return View(employee); }
        public IActionResult Edit(int id) { var emp = _service.GetEmployee(id); return emp == null ? NotFound() : View(new EmployeeViewModel { ID = emp.ID, Name = emp.Name, DateOfBirth = emp.DateOfBirth, DateOfJoining = emp.DateOfJoining, Salary = emp.Salary, Dept = emp.Dept, Password = emp.Password }); }
        [HttpPost]
        public IActionResult Edit(EmployeeViewModel employee) { if (ModelState.IsValid) { _service.UpdateEmployee(new Employee { ID = employee.ID, Name = employee.Name, DateOfBirth = employee.DateOfBirth, DateOfJoining = employee.DateOfJoining, Salary = employee.Salary, Dept = employee.Dept, Password = employee.Password }); return RedirectToAction("Index"); } return View(employee); }
    }
}