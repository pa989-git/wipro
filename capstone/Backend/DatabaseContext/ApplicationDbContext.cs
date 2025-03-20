using Microsoft.EntityFrameworkCore;
using Capstone.Models; // ✅ Import the Job model

namespace Capstone.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; } // ✅ Ensure Users DbSet exists
        public DbSet<Job> Jobs { get; set; }   // ✅ Add Jobs DbSet
    }
}
