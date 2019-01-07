using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Views;
using CaritasAPI2.Models;


namespace CaritasAPI2.Mappers
{
    public class AccommodationMapper
    {
        public AccommodationView MapAccommodationToBasicAccommodation(Accommodation accommodation)
        {
            var result = new AccommodationView
            {
                Id = accommodation.Id,
                AccommodationName = accommodation.AccommodationName,
                Address = accommodation.Address,
                Description = accommodation.Description

            };
            return result;
        }

        public IEnumerable<AccommodationView> MapAccommodationCollectionToBasicAccommodationSelection(IEnumerable<Accommodation> accommodationCollection)
        {
            var result = new List<AccommodationView>();
            foreach (Accommodation accommodation in accommodationCollection)
            {
                var basicAccommodation = this.MapAccommodationToBasicAccommodation(accommodation);
                result.Add(basicAccommodation);
            }

            return result;
        }

        public Accommodation MapAccommodationViewToAccommodation(AccommodationView accommodation)
        {
            var result = new Accommodation()
            {
                Id = accommodation.Id,
                AccommodationName = accommodation.AccommodationName,
                Address = accommodation.Address,
                Description = accommodation.Description

            };
            return result;
        }
    }
}