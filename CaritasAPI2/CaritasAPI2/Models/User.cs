using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasAPI2.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public double Oib { get; set; }

        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public virtual Gender Gender { get; set; }
        public virtual Nationality Nationality { get; set; }
        public Nullable<int> NationalityID { get; set; }
        public Nullable<int> GenderID { get; set; }

    }
}