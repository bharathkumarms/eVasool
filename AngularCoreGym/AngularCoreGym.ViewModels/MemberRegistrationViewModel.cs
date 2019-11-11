using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularCoreGym.ViewModels
{
    public class MemberRegistrationViewModel
    {
        public long MemberId { get; set; }

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

        public int? Gender { get; set; }

        [DisplayName("Plan")]
        public int? PlanID { get; set; }

        [DisplayName("Workouttype")]
        public int? SchemeID { get; set; }

        [DisplayName("Joining Date")]
        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? JoiningDate { get; set; }

        public string Address { get; set; }
        
        public Decimal? Amount { get; set; }

        public string SchemeName { get; set; }

        public string PlanName { get; set; }

    }
}
