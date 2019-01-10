using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;
namespace CaritasAPI2.Views
{
    public class RoomView
    {
        public int Id { get; set; }
        public string RoomName { get; set; }
        public string Description { get; set; }

        public AccommodationView Accommodation { get; set; }
    }
}