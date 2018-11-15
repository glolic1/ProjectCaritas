using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CaritasAPI.Models
{
    public class Gender
    {
        public int id { get; set; }
        public string genderName { get; set; }

        public ICollection<User> users { get; set; }
    }
}
