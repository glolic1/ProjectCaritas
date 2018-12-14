using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Views;
using CaritasAPI2.Models;
namespace CaritasAPI2.Mappers
{
    public class UserMapper
    {
        public UserView MapUserToBasicUser(User user)
        {
            var result = new UserView
            {
                Id = user.Id,
                Name = user.Name,
                LastName = user.LastName,
                Oib = user.Oib,
                Address = user.Address,
                Nationality = new NationalityView()
                {
                    Id = user.Nationality.Id,
                    NationalityName = user.Nationality.NationalityName
                },
                Gender = new GenderView()
                {
                    Id = user.Gender.Id,
                    GenderName = user.Gender.GenderName
                },
               
                PhoneNumber = user.PhoneNumber

            };
            return result;
        }

        public IEnumerable<UserView> MapUserCollectionToBasicUserCollection(IEnumerable<User> userCollection)
        {
            var result = new List<UserView>();
            foreach (User user in userCollection)
            {
                var basicUser = this.MapUserToBasicUser(user);
                result.Add(basicUser);
            }

            return result;
        }
    }
}