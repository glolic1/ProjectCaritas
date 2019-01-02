using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;
using CaritasAPI2.SInterfaces;

namespace CaritasAPI2.Services
{
    public class GandNService : IGandNService
    {
        private UserContext _context;

        public GandNService()
        {
            this._context = new UserContext();
        }

        public IEnumerable<Gender> GetGenders()
        {
            var query = _context.Genders.OrderBy(s => s.GenderName);
            return query.ToList();
        }

        public IEnumerable<Nationality> GetNationalities()
        {
            var query = _context.Nationalities.OrderBy(c => c.NationalityName);
            return query.ToList();
        }
    }
}