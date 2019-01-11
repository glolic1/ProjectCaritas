using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Services;
using CaritasAPI2.Models;

namespace CaritasAPI2.SInterfaces
{
    public interface IAccommodationService
    {
        List<Accommodation> GetAccommodationCollection(int pageIndex, int pageSize, string sortColumn, string sortOrder);
        Accommodation GetAccommodation(int ID);
        int GetAccommodationCount();
        bool AddAccommodation(Accommodation accommodation);
        bool UpdateAccommodation(Accommodation accommodation);
        bool DeleteAccommodation(int ID);
        IEnumerable<Accommodation> GetAccs();
    }
}