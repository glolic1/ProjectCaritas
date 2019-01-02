using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaritasAPI2.Views;
using CaritasAPI2.Models;
namespace CaritasAPI2.Mappers
{
    public class GandNMapper
    {
        public GenderView MapGenderModelToGenderView(Gender gender)
        {
            var result = new GenderView()
            {
                Id = gender.Id,
                GenderName = gender.GenderName
            };
            return result;
        }

        public IEnumerable<GenderView> MapGenderModelCollectionToGenderViewCollection(IEnumerable<Gender> genders)
        {
            var result = new List<GenderView>();
            foreach (Gender sex in genders)
            {
                result.Add(MapGenderModelToGenderView(sex));
            }
            return result;
        }

        public NationalityView MapNationalityToView(Nationality nationalities)
        {
            var result = new NationalityView()
            {
                Id = nationalities.Id,
                NationalityName = nationalities.NationalityName
            };
            return result;
        }

        public IEnumerable<NationalityView> MapNationalityModelCollectionToNationalityViewCollection(IEnumerable<Nationality> nationalitiesCol)
        {
            var result = new List<NationalityView>();
            foreach (Nationality citizenship in nationalitiesCol)
            {
                result.Add(MapNationalityToView(citizenship));
            }
            return result;
        }
    }
}