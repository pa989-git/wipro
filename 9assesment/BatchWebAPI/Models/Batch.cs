using System;
using System.ComponentModel.DataAnnotations;

public class Batch
{
    [Key]
    public int BatchId { get; set; }  // Primary Key

    [Required]
    public string Name { get; set; }

    [Required]
    public DateTime StartDate { get; set; }

    [Required]
    public int Seats { get; set; }

    [Required]
    public int CreatedBy { get; set; }

    [Required]
    public DateTime CreatedOn { get; set; }

    public int? UpdatedBy { get; set; }
    public DateTime? UpdatedOn { get; set; }

    [Required]
    public bool IsActive { get; set; }
}
