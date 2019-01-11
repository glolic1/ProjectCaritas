using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Views;
using CaritasAPI2.Models;

namespace CaritasAPI2.Mappers
{
    public class BedMapper
    {
        public BedView MapBedToBasicBed(Bed bed)
        {
            var result = new BedView
            {
                Id = bed.Id,
                BedName = bed.BedName,
                Description = bed.Description,
                Room = new RoomView()
                {
                    Id = bed.Room.Id,
                    RoomName = bed.Room.RoomName,
                    Description = bed.Room.Description,
                    Accommodation = new AccommodationView()
                    {
                        Id = bed.Room.Accommodation.Id,
                        AccommodationName = bed.Room.Accommodation.AccommodationName,
                        Address = bed.Room.Accommodation.Address,
                        Description = bed.Room.Accommodation.Description
                    }
                }
            };
            return result;
        }

        public IEnumerable<BedView> MapBedCollectionToBasicBedCollection(IEnumerable<Bed> bedCollection)
        {
            var result = new List<BedView>();
            foreach (Bed bed in bedCollection)
            {
                var basicBed = this.MapBedToBasicBed(bed);
                result.Add(basicBed);
            }

            return result;
        }

        public Bed MapBedViewToBed(BedView bed)
        {
            var result = new Bed()
            {
                Id = bed.Id,
                BedName = bed.BedName,
                Description = bed.Description,
                RoomID = bed.Room.Id

            };
            return result;
        }
    }
}