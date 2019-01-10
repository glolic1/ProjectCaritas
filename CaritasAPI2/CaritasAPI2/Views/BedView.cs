using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;
namespace CaritasAPI2.Views
{
    public class BedView
    {
        public int Id { get; set; }
        public string BedName { get; set; }
        public string Description { get; set; }

        public RoomView Room { get; set; }
    }
}