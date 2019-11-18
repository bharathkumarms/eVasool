using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AngularCoreGym.Models
{
    public class PropertyItemAudit
    {
        public int Id { get; set; }
        public int PropertyItemId { get; set; }

        [Required(ErrorMessage = "*")]
        public string Name { get; set; }
        public string Description { get; set; }

        public string Area { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Zip { get; set; }

        //public Landlord LeasedTo { get; set; }

        public DateTime? LeaseDueDate { get; set; }

        public DateTime? NextDueDate { get; set; }

        public bool IsActive { get; set; }

        //public string file { get; set; }

        public decimal? TotalLeaseAmount { get; set; }

        public decimal? InstallmentAmount { get; set; }

        public int? InstallementPaid { get; set; }

        public string Notes { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public int? MemberId { get; set; }

        public string Action { get; set; }
    }
}
