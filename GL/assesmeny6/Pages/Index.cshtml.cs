using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using day9crudrazor.Model;

namespace day9crudrazor.Pages
{
    public class IndexModel : PageModel
    {
        private readonly day9crudrazor.Model.Productdbcontext _context;

        public IndexModel(day9crudrazor.Model.Productdbcontext context)
        {
            _context = context;
        }

        public IList<Product> Product { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Product = await _context.Products.ToListAsync();
        }
    }
}
