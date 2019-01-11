using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;
using CaritasAPI2.SInterfaces;

namespace CaritasAPI2.Services
{
    public class AccommodationService : IAccommodationService
    {
        private ResidenceContext _context;

        public AccommodationService()
        {
            this._context = new ResidenceContext();
        }

        public int GetAccommodationCount()
        {
            var query = _context.Accommodations.Count();
            return query;
        }
        public IEnumerable<Accommodation> GetAccs()
        {
            var query = _context.Accommodations.OrderBy(s => s.AccommodationName);
            return query.ToList();
        }
        public List<Accommodation> GetAccommodationCollection(int pageIndex, int pageSize, string sortColumn, string sortOrder)
        {
            var query = SortAccommodationCollection(sortColumn, sortOrder);

            var paginatedQuery = query.Skip(pageIndex * pageSize).Take(pageSize);

            return paginatedQuery.ToList();
        }

        public IOrderedQueryable<Accommodation> SortAccommodationCollection(string sortColumn, string sortOrder)
        {
            if (sortColumn == null || sortOrder == null)
            {
                return _context.Accommodations.OrderBy(v => v.Id);
            }

            switch (sortColumn)
            {
                case "id":
                    return sortColumn.Equals("asc") ? _context.Accommodations.OrderBy(v => v.Id) : _context.Accommodations.OrderByDescending(v => v.AccommodationName);
                case "AccommodationName":
                    return sortOrder.Equals("asc") ? _context.Accommodations.OrderBy(v => v.AccommodationName) : _context.Accommodations.OrderByDescending(v => v.AccommodationName);
                case "Address":
                    return sortOrder.Equals("asc") ? _context.Accommodations.OrderBy(v => v.Address) : _context.Accommodations.OrderByDescending(v => v.Address);
                case "Description":
                    return sortOrder.Equals("asc") ? _context.Accommodations.OrderBy(v => v.Description) : _context.Accommodations.OrderByDescending(v => v.Description);
                
                default:
                    return _context.Accommodations.OrderBy(v => v.Id);
            }
        }

        public Accommodation GetAccommodation(int ID)
        {
            var query = _context.Accommodations.SingleOrDefault(v => v.Id == ID);
            return query;
        }
        public bool AddAccommodation(Accommodation accommodation)
        {
            try
            {
                _context.Accommodations.Add(accommodation);
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool DeleteAccommodation(int ID)
        {
            try
            {
                var accommodation = _context.Accommodations.SingleOrDefault(v => v.Id == ID);
                if (accommodation != null)
                {
                    _context.Accommodations.Remove(accommodation);
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
        public bool UpdateAccommodation(Accommodation accommodation)
        {
            int id;
            var accommodationN = _context.Accommodations.SingleOrDefault(v => v.Id == accommodation.Id);
            accommodationN.AccommodationName = accommodation.AccommodationName;
            accommodationN.Address = accommodation.Address;
            accommodationN.Description = accommodation.Description;

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
