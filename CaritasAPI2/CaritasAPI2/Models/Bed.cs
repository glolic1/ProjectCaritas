using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasAPI2.Models
{
    public class Bed
    {
        public int Id { get; set; }
        public string BedName { get; set; }
        public string Description { get; set; }

        public Room Room { get; set; }
    }
}