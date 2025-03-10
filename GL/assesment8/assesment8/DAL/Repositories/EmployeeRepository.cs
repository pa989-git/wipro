using System.Collections.Generic;
using System.Linq;
using BLL.Models;
using DAL.DataContext;

namespace DAL.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeDbContext _context;
        public EmployeeRepository(EmployeeDbContext context) => _context = context;

        public IEnumerable<Employee> GetAll() => _context.Employees.ToList();
        public Employee GetById(int id) => _context.Employees.Find(id);
        public void Add(Employee employee) { _context.Employees.Add(employee); _context.SaveChanges(); }
        public void Update(Employee employee) { _context.Employees.Update(employee); _context.SaveChanges(); }
        public void Delete(int id) { var emp = _context.Employees.Find(id); if (emp != null) { _context.Employees.Remove(emp); _context.SaveChanges(); } }
    }
}