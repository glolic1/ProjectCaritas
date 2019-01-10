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
    public class BedsController : ApiController
    {
        private IBedService _service;
        private BedMapper _mapper;
        private ResidenceContext db = new ResidenceContext();

        public BedsController()
        {
            this._service = new BedService();
            this._mapper = new BedMapper();
        }



        // GET: api/Beds
        [HttpGet]
        public IQueryable<Bed> GetBeds()
        {
            return db.Beds;
        }


        [HttpGet]
        public IHttpActionResult Get(string pageIndex, string pageSize, string sortColumn, string sortOrder)
        {
            var result = _service.GetBedCollection(Int32.Parse(pageIndex), Int32.Parse(pageSize), sortColumn, sortOrder);
            var response = _mapper.MapBedCollectionToBasicBedCollection(result);
            return Ok(response);
        }

        [HttpGet]
        [Route("api/Beds/Count")]
        public IHttpActionResult GetBedCount()
        {
            var result = _service.GetBedCount();
            return Ok(result);
        }

        // GET: api/Beds/5
        public IHttpActionResult GetBed(int id)
        {
            var result = _service.GetBed(id);
            if (result == null)
            {
                return BadRequest("Not found.");
            }
            var response = _mapper.MapBedToBasicBed(result);
            return Ok(response);
        }

        // POST: api/Beds
        public IHttpActionResult PostRoom([FromBody] BedView bed)
        {
            var model = _mapper.MapBedViewToBed(bed);
            var result = _service.AddBed(model);
            if (result)
            {
                return Ok();
            }
            else
            {
                return InternalServerError();
            }
        }
        // PUT: api/Beds/5
        public IHttpActionResult Put([FromBody] BedView bed)
        {
            var model = _mapper.MapBedViewToBed(bed);
            var result = _service.UpdateBed(model);
            if (result)
            {
                return Ok(result);
            }
            else
            {
                return InternalServerError();
            }
        }

        // DELETE: api/Beds/5
        public bool Delete(int id)
        {
            try
            {
                var bed = db.Beds.SingleOrDefault(v => v.Id == id);
                if (bed != null)
                {
                    db.Beds.Remove(bed);
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