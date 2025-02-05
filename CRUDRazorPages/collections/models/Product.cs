using System.ComponentModel.DataAnnotations;

namespace CURDRazorPagesEF.models
{
    public class Product
    {
        [Key] public int Id { get; set; }
        public int ProId { get; set; }
        public string? ProName { get; set; }
        public decimal? Price { get; set; }
        public string? Category {  get; set; }


    }
}
