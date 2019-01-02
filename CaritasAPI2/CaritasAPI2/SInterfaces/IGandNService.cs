using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;
using CaritasAPI2.Services;

namespace CaritasAPI2.SInterfaces
{
    interface IGandNService 
    {
        IEnumerable<Gender> GetGenders();
        IEnumerable<Nationality> GetNationalities();
    }
}