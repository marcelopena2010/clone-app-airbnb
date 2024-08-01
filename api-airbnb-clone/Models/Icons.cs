using System.ComponentModel.DataAnnotations.Schema;

namespace api_airbnb_clone.Models
{
    public class Icons
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IconsId { get; set; }
        public string IconsName { get; set; }
        public string IconsDesign { get; set; }
    }
}
