using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CRUDRazorPagesEF.models;
using CURDRazorPagesEF.models;

namespace CRUDRazorPagesEF.Pages
{
    public class IndexModel : PageModel
    {
        private readonly CRUDRazorPagesEF.models.ProductDbContext _context;

        public IndexModel(CRUDRazorPagesEF.models.ProductDbContext context)
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
