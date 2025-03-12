using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using BatchManagementSystem.Models;
using BatchManagementSystem.Data;
using Microsoft.AspNetCore.Authorization;

namespace BatchManagementSystem.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
    
        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }
    
        [HttpGet]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            return _context.Users.ToList();
        }
    
        [HttpPost]
        public ActionResult<User> CreateUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
        }
    
        // Update and Delete endpoints would be added similarly.
    }
}
