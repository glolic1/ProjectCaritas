using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasApi.Models
{
    public class Nationalities
    {
        public int id { get; set; }
        public string nationalityName { get; set; }

        public ICollection<User> users { get; set; }
    }
}