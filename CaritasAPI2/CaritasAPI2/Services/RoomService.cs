using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;
using CaritasAPI2.SInterfaces;

namespace CaritasAPI2.Services
{
    public class RoomService : IRoomService
    {
        private ResidenceContext _context;

        public RoomService()
        {
            this._context = new ResidenceContext();
        }

        public int GetRoomCount()
        {
            var query = _context.Rooms.Count();
            return query;
        }

        public List<Room> GetRoomCollection(int pageIndex, int pageSize, string sortColumn, string sortOrder)
        {
            var query = SortRoomCollection(sortColumn, sortOrder);

            var paginatedQuery = query.Skip(pageIndex * pageSize).Take(pageSize);

            return paginatedQuery.ToList();
        }

        public IOrderedQueryable<Room> SortRoomCollection(string sortColumn, string sortOrder)
        {
            if (sortColumn == null || sortOrder == null)
            {
                return _context.Rooms.OrderBy(v => v.Id);
            }

            switch (sortColumn)
            {
                case "id":
                    return sortColumn.Equals("asc") ? _context.Rooms.OrderBy(v => v.Id) : _context.Rooms.OrderByDescending(v => v.RoomName);
                case "RoomName":
                    return sortOrder.Equals("asc") ? _context.Rooms.OrderBy(v => v.RoomName) : _context.Rooms.OrderByDescending(v => v.RoomName);
                case "Description":
                    return sortOrder.Equals("asc") ? _context.Rooms.OrderBy(v => v.Description) : _context.Rooms.OrderByDescending(v => v.Description);
                case "Smjestaj":
                    return sortOrder.Equals("asc") ? _context.Rooms.OrderBy(v => v.Accommodation.AccommodationName) : _context.Rooms.OrderByDescending(v => v.Accommodation.AccommodationName);

                default:
                    return _context.Rooms.OrderBy(v => v.Id);
            }
        }

        public Room GetRoom(int ID)
        {
            var query = _context.Rooms.SingleOrDefault(v => v.Id == ID);
            return query;
        }
        public bool AddRoom(Room room)
        {
            try
            {
                _context.Rooms.Add(room);
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool DeleteRoom(int ID)
        {
            try
            {
                var room = _context.Rooms.SingleOrDefault(v => v.Id == ID);
                if (room != null)
                {
                    _context.Rooms.Remove(room);
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
        public bool UpdateRoom(Room room)
        {
            int id;
            var roomN = _context.Rooms.SingleOrDefault(v => v.Id == room.Id);
            roomN.RoomName = room.RoomName;
            roomN.Description = room.Description;
            roomN.AccommodationID = room.AccommodationID;
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