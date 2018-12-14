﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasAPI2.Models
{
    public class Nationalities
    {
        public int Id { get; set; }
        public string NationalityName { get; set; }

        public ICollection<User> Users { get; set; }
    }
}