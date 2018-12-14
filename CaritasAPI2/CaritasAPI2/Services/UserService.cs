using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;
using CaritasAPI2.SInterfaces;

namespace CaritasAPI2.Services
{
    public class UserService : IUserService
    {
        private UserContext _context;

        public UserService()
        {
            this._context = new UserContext();
        }

        public int GetUserCount()
        {
            var query = _context.Users.Count();
            return query;
        }

        public List<User> GetUserCollection(int pageIndex, int pageSize, string sortColumn, string sortOrder)
        {
            var query = SortUserCollection(sortColumn, sortOrder);

            var paginatedQuery = query.Skip(pageIndex * pageSize).Take(pageSize);

            return paginatedQuery.ToList();
        }

        public IOrderedQueryable<User> SortUserCollection(string sortColumn, string sortOrder)
        {
            if (sortColumn == null || sortOrder == null)
            {
                return _context.Users.OrderBy(v => v.Id);
            }

            switch (sortColumn)
            {
                case "firstName":
                    return sortOrder.Equals("asc") ? _context.Users.OrderBy(v => v.Name) : _context.Users.OrderByDescending(v => v.Name);
                case "lastName":
                    return sortOrder.Equals("asc") ? _context.Users.OrderBy(v => v.LastName) : _context.Users.OrderByDescending(v => v.LastName);
                case "oib":
                    return sortOrder.Equals("asc") ? _context.Users.OrderBy(v => v.Oib) : _context.Users.OrderByDescending(v => v.Oib);
                case "email":
                    return sortOrder.Equals("asc") ? _context.Users.OrderBy(v => v.Address) : _context.Users.OrderByDescending(v => v.Address);
                case "username":
                    return sortOrder.Equals("asc") ? _context.Users.OrderBy(v => v.PhoneNumber) : _context.Users.OrderByDescending(v => v.PhoneNumber);
                case "birthday":
                    return sortOrder.Equals("asc") ? _context.Users.OrderBy(v => v.Gender.GenderName) : _context.Users.OrderByDescending(v => v.Gender.GenderName);
                case "sex":
                    return sortOrder.Equals("asc") ? _context.Users.OrderBy(v => v.Nationality.NationalityName) : _context.Users.OrderByDescending(v => v.Nationality.NationalityName);
                default:
                    return _context.Users.OrderBy(v => v.Id);
            }
        }

        public User GetUser(int ID)
        {
            var query = _context.Users.SingleOrDefault(v => v.Id == ID);
            return query;
        }
    }
}