using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CaritasAPI2.Models;
using CaritasAPI2.SInterfaces;
using CaritasAPI2.Views;
using CaritasAPI2.Mappers;
using CaritasAPI2.Services;

namespace CaritasAPI2.Controllers
{
    public class AccommodationsController : ApiController
    {
        private IAccommodationService _service;
        private AccommodationMapper _mapper;
        private ResidenceContext db = new ResidenceContext();

        public AccommodationsController()
        {
            this._service = new AccommodationService();
            this._mapper = new AccommodationMapper();
        }



        // GET: api/Users
        [HttpGet]
        [Route("api/Accommodations/All")]

        public IEnumerable<AccommodationView> GetAccommodations()
        {
            var result = _service.GetAccs();
            var response = _mapper.MapAccommodationModelCollectionToAcommodationViewCollection(result);
            return response;
        }


        [HttpGet]
        public IHttpActionResult Get(string pageIndex, string pageSize, string sortColumn, string sortOrder)
        {
            var result = _service.GetAccommodationCollection(Int32.Parse(pageIndex), Int32.Parse(pageSize), sortColumn, sortOrder);
            var response = _mapper.MapAccommodationCollectionToBasicAccommodationSelection(result);
            return Ok(response);
        }

        [HttpGet]
        [Route("api/Accommodations/Count")]
        public IHttpActionResult GetAccommodationCount()
        {
            var result = _service.GetAccommodationCount();
            return Ok(result);
        }

        // GET: api/Users/5
        public IHttpActionResult GetAccommodation(int id)
        {
            var result = _service.GetAccommodation(id);
            if (result == null)
            {
                return BadRequest("Not found.");
            }
            var response = _mapper.MapAccommodationToBasicAccommodation(result);
            return Ok(response);
        }

        // POST: api/Users
        public IHttpActionResult PostAccommodation([FromBody] AccommodationView accommodation)
        {
            var model = _mapper.MapAccommodationViewToAccommodation(accommodation);
            var result = _service.AddAccommodation(model);
            if (result)
            {
                return Ok();
            }
            else
            {
                return InternalServerError();
            }
        }
        // PUT: api/Users/5
        public IHttpActionResult Put([FromBody] AccommodationView accommodation)
        {
            var model = _mapper.MapAccommodationViewToAccommodation(accommodation);
            var result = _service.UpdateAccommodation(model);
            if (result)
            {
                return Ok(result);
            }
            else
            {
                return InternalServerError();
            }
        }

        // DELETE: api/Users/5
        public bool Delete(int id)
        {
            try
            {
                var accommodation = db.Accommodations.SingleOrDefault(v => v.Id == id);
                if (accommodation != null)
                {
                    db.Accommodations.Remove(accommodation);
                    db.SaveChanges();
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
    }
}