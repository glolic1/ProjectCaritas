using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasAPI2.Models
{
    public class Accommodation
    {
        public int Id { get; set; }
        public string AccommodationName { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
    }
}