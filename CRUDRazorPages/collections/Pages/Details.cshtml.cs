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
    public class DetailsModel : PageModel
    {
        private readonly CRUDRazorPagesEF.models.ProductDbContext _context;

        public DetailsModel(CRUDRazorPagesEF.models.ProductDbContext context)
        {
            _context = context;
        }

        public Product Product { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products.FirstOrDefaultAsync(m => m.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            else
            {
                Product = product;
            }
            return Page();
        }
    }
}
