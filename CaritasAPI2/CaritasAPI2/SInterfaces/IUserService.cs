using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Models;

namespace CaritasAPI2.SInterfaces
{
    public interface IUserService
    {
        List<User> GetUserCollection(int pageIndex, int pageSize, string sortColumn, string sortOrder);
        User GetUser(int ID);
        int GetUserCount();
        bool AddUser(User user);
        bool UpdateUser(User user);
        bool DeleteUser(int ID);
    }
}