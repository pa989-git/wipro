using Microsoft.EntityFrameworkCore;
namespace day9crudrazor.Model
{
    public class Productdbcontext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        
         public Productdbcontext(DbContextOptions<Productdbcontext> options) : base(options) { }
    }

    }

