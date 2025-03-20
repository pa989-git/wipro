using System.Collections.Generic;
using System.Linq;
using Capstone.Data;
using Capstone.Models;
using Capstone.Data;
using Capstone.Models;

namespace Capstone.Services
{
    public class JobService
    {
        private readonly ApplicationDbContext _context;
        public JobService(ApplicationDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Job> GetAllJobs()
        {
            return _context.Jobs.ToList();
        }
        public void AddJob(Job job)
        {
            _context.Jobs.Add(job);
            _context.SaveChanges();
        }
    }
}