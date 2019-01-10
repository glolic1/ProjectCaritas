using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Services;
using CaritasAPI2.Models;

namespace CaritasAPI2.SInterfaces
{
    public interface IRoomService
    {
        List<Room> GetRoomCollection(int pageIndex, int pageSize, string sortColumn, string sortOrder);
        Room GetRoom(int ID);
        int GetRoomCount();
        bool AddRoom(Room room);
        bool UpdateRoom(Room room);
        bool DeleteRoom(int ID);
    }
}