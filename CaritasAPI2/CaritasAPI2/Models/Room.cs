using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasAPI2.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string RoomName { get; set; }
        public string Description { get; set; }

        public virtual Accommodation Accommodation { get; set; }
        public Nullable<int> AccommodationID { get; set; }


    }
}