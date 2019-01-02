using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaritasAPI2.Services;
using CaritasAPI2.SInterfaces;
using CaritasAPI2.Mappers;
using CaritasAPI2.Views;

namespace CaritasAPI2.Controllers
{
    public class GandNController : ApiController
    {
        private IGandNService _service;
        private GandNMapper _mapper;

        public GandNController()
        {
            this._service = new GandNService();
            this._mapper = new GandNMapper();
        }

        // GET: api/Catalogue
        [HttpGet]
        [Route("api/gandn/Gender")]
        public IEnumerable<GenderView> GetSexes()
        {
            var result = _service.GetGenders();
            var response = _mapper.MapGenderModelCollectionToGenderViewCollection(result);
            return response;
        }

        [HttpGet]
        [Route("api/gandn/nationality")]
        public IEnumerable<NationalityView> GetCitizenships()
        {
            var result = _service.GetNationalities();
            var response = _mapper.MapNationalityModelCollectionToNationalityViewCollection(result);
            return response;
        }
    }
}
