using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CaritasAPI.Models
{
    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        public int oib { get; set; }

        public string address { get; set; }
        public string phoneNumber { get; set; }
        public Gender gender { get; set; }
        public Nationalities nationality { get; set; }


    }
}
