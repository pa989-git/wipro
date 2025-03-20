using System;
using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Job
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        //[Required]
       //public string Company { get; set; }

        public string Description { get; set; }

        [Required]
        public DateTime PostedDate { get; set; } = DateTime.UtcNow; // ✅ Default to current date

    }
}
