using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Views;
using CaritasAPI2.Models;

namespace CaritasAPI2.Mappers
{
    public class RoomMapper
    {
        public RoomView MapRoomToBasicRoom(Room room)
        {
            var result = new RoomView
            {
                Id = room.Id,
                RoomName = room.RoomName,
                Description = room.Description,
                Accommodation = new AccommodationView()
                {
                    Id = room.Accommodation.Id,
                    AccommodationName = room.Accommodation.AccommodationName,
                    Address = room.Accommodation.Address,
                    Description=room.Accommodation.Description
                }

            };
            return result;
        }

        public IEnumerable<RoomView> MapRoomCollectionToBasicRoomCollection(IEnumerable<Room> roomCollection)
        {
            var result = new List<RoomView>();
            foreach (Room room in roomCollection)
            {
                var basicRoom = this.MapRoomToBasicRoom(room);
                result.Add(basicRoom);
            }

            return result;
        }

        public Room MapRoomViewToRoom(RoomView room)
        {
            var result = new Room()
            {
                Id = room.Id,
                RoomName = room.RoomName,
                Description = room.Description,
                AccommodationID = room.Accommodation.Id

            };
            return result;
        }
    }
}