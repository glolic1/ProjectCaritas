using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;
using CaritasAPI2.SInterfaces;

namespace CaritasAPI2.Services
{
    public class BedService : IBedService
    {
        private ResidenceContext _context;

        public BedService()
        {
            this._context = new ResidenceContext();
        }

        public int GetBedCount()
        {
            var query = _context.Beds.Count();
            return query;
        }

        public List<Bed> GetBedCollection(int pageIndex, int pageSize, string sortColumn, string sortOrder)
        {
            var query = SortBedCollection(sortColumn, sortOrder);

            var paginatedQuery = query.Skip(pageIndex * pageSize).Take(pageSize);

            return paginatedQuery.ToList();
        }

        public IOrderedQueryable<Bed> SortBedCollection(string sortColumn, string sortOrder)
        {
            if (sortColumn == null || sortOrder == null)
            {
                return _context.Beds.OrderBy(v => v.Id);
            }

            switch (sortColumn)
            {
                case "id":
                    return sortColumn.Equals("asc") ? _context.Beds.OrderBy(v => v.Id) : _context.Beds.OrderByDescending(v => v.BedName);
                case "BedName":
                    return sortOrder.Equals("asc") ? _context.Beds.OrderBy(v => v.BedName) : _context.Beds.OrderByDescending(v => v.BedName);
                case "Description":
                    return sortOrder.Equals("asc") ? _context.Beds.OrderBy(v => v.Description) : _context.Beds.OrderByDescending(v => v.Description);


                default:
                    return _context.Beds.OrderBy(v => v.Id);
            }
        }

        public Bed GetBed(int ID)
        {
            var query = _context.Beds.SingleOrDefault(v => v.Id == ID);
            return query;
        }
        public bool AddBed(Bed bed)
        {
            try
            {
                _context.Beds.Add(bed);
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool DeleteBed(int ID)
        {
            try
            {
                var bed = _context.Beds.SingleOrDefault(v => v.Id == ID);
                if (bed != null)
                {
                    _context.Beds.Remove(bed);
                    _context.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {
                return false;
            }

        }
        public bool UpdateBed(Bed bed)
        {
            int id;
            var bedN = _context.Beds.SingleOrDefault(v => v.Id == bed.Id);
            bedN.BedName = bed.BedName;
            bedN.Description = bed.Description;
            bedN.RoomID = bed.RoomID;
            try
            {
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}