using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasAPI2.Views
{
    public class UserView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public double Oib { get; set; }

        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public GenderView Gender { get; set; }
        public NationalityView Nationality { get; set; }
    }
}