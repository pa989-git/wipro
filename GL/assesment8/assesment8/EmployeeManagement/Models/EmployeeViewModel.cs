using System;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Models
{
    public class EmployeeViewModel
    {
        [Key]
        [Required]
        public int ID { get; set; }

        [Required]
        [MinLength(15)]
        [RegularExpression(@"^[A-Za-z\s]+$")]
        public string Name { get; set; }

        [Required]
        [Range(typeof(DateTime), "2002-01-01", "2005-12-31")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfJoining { get; set; }

        [Range(12000, 60000)]
        public decimal? Salary { get; set; }

        [Required]
        [RegularExpression(@"^(HR|Accts|IT)$")]
        public string Dept { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}