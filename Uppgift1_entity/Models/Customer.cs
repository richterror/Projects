using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    [Index(nameof(Email), IsUnique = true)]
    public class Customer
    {
        [Key]
        [Required]
        public string Email { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(80)")]
        public string Address { get; set; }

        [Required]
        [Column(TypeName = "char(5)")]
        public string ZipCode { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string City { get; set; }


    }
}