using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularCoreGym.Models
{
    public class MemberRegistration
    {

        [Key]
        public long MemberId { get; set; }
        public string MemberNo { get; set; }

        [DisplayName("First Name")]
        [Required(ErrorMessage = "Please enter First Name")]
        public string MemberFName { get; set; }
        [DisplayName("Last Name")]
        [Required(ErrorMessage = "Please enter Last Name")]
        public string MemberLName { get; set; }
        [DisplayName("Middle Name")]
        public string MemberMName { get; set; }

        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DisplayName("Birth Date")]
        public DateTime? Dob { get; set; }

        public string Age { get; set; }

        public string Contactno { get; set; }
        public string EmailId { get; set; }

        public string Gender { get; set; }

        [DisplayName("Plan")]
        public int? PlanID { get; set; }

        [DisplayName("Workouttype")]
        public int? SchemeID { get; set; }

        public long? Createdby { get; set; }

        public long? ModifiedBy { get; set; }

        public string MemImagename { get; set; }

        public string MemImagePath { get; set; }

        [DisplayName("Joining Date")]
        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? JoiningDate { get; set; }

        public string Address { get; set; }
        public long? MainMemberId { get; set; }

        [NotMapped]
        public Decimal? Amount { get; set; }

    }
}
