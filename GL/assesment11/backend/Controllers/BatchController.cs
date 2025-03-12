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
    public class BatchController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
    
        public BatchController(ApplicationDbContext context)
        {
            _context = context;
        }
    
        [HttpGet]
        public ActionResult<IEnumerable<Batch>> GetBatches()
        {
            return _context.Batches.ToList();
        }
    
        [HttpPost]
        public ActionResult<Batch> CreateBatch(Batch batch)
        {
            _context.Batches.Add(batch);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetBatches), new { id = batch.Id }, batch);
        }
    
        // Update and Delete endpoints would be added similarly.
    }
}
