using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasApi.Models
{
    public class Gender
    {
        public int id { get; set; }
        public string genderName { get; set; }

        public ICollection<User> users { get; set; }
    }
}