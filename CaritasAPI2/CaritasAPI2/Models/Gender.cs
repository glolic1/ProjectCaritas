﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CaritasAPI2.Models
{
    public class Gender
    {
        public int Id { get; set; }
        public string GenderName { get; set; }

        public ICollection<User> Users { get; set; }
    }
}