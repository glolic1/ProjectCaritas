using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Services;
using CaritasAPI2.Models;

namespace CaritasAPI2.SInterfaces
{
    interface IBedService
    {
        List<Bed> GetBedCollection(int pageIndex, int pageSize, string sortColumn, string sortOrder);
        Bed GetBed(int ID);
        int GetBedCount();
        bool AddBed(Bed bed);
        bool UpdateBed(Bed bed);
        bool DeleteBed(int ID);
    }
}
