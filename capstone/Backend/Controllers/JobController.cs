using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Capstone.Data;
using Capstone.Models;

namespace Capstone.Controllers
{
    [Route("api/jobs")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JobController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ✅ GET all jobs
        [HttpGet]
        public ActionResult<IEnumerable<Job>> GetJobs()
        {
            return _context.Jobs.ToList();
        }

        // ✅ GET a specific job by ID
        [HttpGet("{id}")]
        public ActionResult<Job> GetJobById(int id)
        {
            var job = _context.Jobs.Find(id);
            if (job == null)
            {
                return NotFound();
            }
            return job;
        }

        // ✅ POST a new job
        [HttpPost]
        public ActionResult<Job> PostJob(Job job)
        {
            _context.Jobs.Add(job);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetJobById), new { id = job.Id }, job);
        }

        // ✅ PUT (Update) a job
        [HttpPut("{id}")]
        public IActionResult UpdateJob(int id, Job updatedJob)
        {
            var job = _context.Jobs.Find(id);
            if (job == null)
            {
                return NotFound();
            }

            job.Title = updatedJob.Title;
            job.Description = updatedJob.Description;
            job.PostedDate = updatedJob.PostedDate;

            _context.SaveChanges();
            return NoContent();
        }

        // ✅ DELETE a job
        [HttpDelete("{id}")]
        public IActionResult DeleteJob(int id)
        {
            var job = _context.Jobs.Find(id);
            if (job == null)
            {
                return NotFound();
            }

            _context.Jobs.Remove(job);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
