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
    public class RoomsController : ApiController
    {
        private IRoomService _service;
        private RoomMapper _mapper;
        private ResidenceContext db = new ResidenceContext();

        public RoomsController()
        {
            this._service = new RoomService();
            this._mapper = new RoomMapper();
        }



        // GET: api/Users
        [HttpGet]
        [Route("api/Rooms/All")]

        public IEnumerable<RoomView> GetAccommodations()
        {
            var result = _service.GetRooms();
            var response = _mapper.MapRoomModelCollectionToModelViewCollection(result);
            return response;
        }


        [HttpGet]
        public IHttpActionResult Get(string pageIndex, string pageSize, string sortColumn, string sortOrder)
        {
            var result = _service.GetRoomCollection(Int32.Parse(pageIndex), Int32.Parse(pageSize), sortColumn, sortOrder);
            var response = _mapper.MapRoomCollectionToBasicRoomCollection(result);
            return Ok(response);
        }

        [HttpGet]
        [Route("api/Rooms/Count")]
        public IHttpActionResult GetRoomCount()
        {
            var result = _service.GetRoomCount();
            return Ok(result);
        }

        // GET: api/Rooms/5
        public IHttpActionResult GetRoom(int id)
        {
            var result = _service.GetRoom(id);
            if (result == null)
            {
                return BadRequest("Not found.");
            }
            var response = _mapper.MapRoomToBasicRoom(result);
            return Ok(response);
        }

        // POST: api/Rooms
        public IHttpActionResult PostRoom([FromBody] RoomView room)
        {
            var model = _mapper.MapRoomViewToRoom(room);
            var result = _service.AddRoom(model);
            if (result)
            {
                return Ok();
            }
            else
            {
                return InternalServerError();
            }
        }
        // PUT: api/Rooms/5
        public IHttpActionResult Put([FromBody] RoomView room)
        {
            var model = _mapper.MapRoomViewToRoom(room);
            var result = _service.UpdateRoom(model);
            if (result)
            {
                return Ok(result);
            }
            else
            {
                return InternalServerError();
            }
        }

        // DELETE: api/Rooms/5
        public bool Delete(int id)
        {
            try
            {
                var room = db.Rooms.SingleOrDefault(v => v.Id == id);
                if (room != null)
                {
                    db.Rooms.Remove(room);
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