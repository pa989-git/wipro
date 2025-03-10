using System.Collections.Generic;
using BLL.Models;
using DAL.Repositories;

namespace BLL.Services
{
    public class EmployeeService
    {
        private readonly IEmployeeRepository _repository;
        public EmployeeService(IEmployeeRepository repository) => _repository = repository;

        public IEnumerable<Employee> GetEmployees() => _repository.GetAll();
        public Employee GetEmployee(int id) => _repository.GetById(id);
        public void AddEmployee(Employee employee) => _repository.Add(employee);
        public void UpdateEmployee(Employee employee) => _repository.Update(employee);
        public void DeleteEmployee(int id) => _repository.Delete(id);
    }
}