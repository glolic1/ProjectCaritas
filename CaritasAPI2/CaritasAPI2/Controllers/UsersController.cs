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
    public class UsersController : ApiController
    {
        private IUserService _service;
        private UserMapper _mapper;
        private UserContext db = new UserContext();

        public UsersController()
        {
            this._service = new UserService();
            this._mapper = new UserMapper();
        }



        // GET: api/Users
        [HttpGet]
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }


        [HttpGet]
        public IHttpActionResult Get(string pageIndex, string pageSize, string sortColumn, string sortOrder)
        {
            var result = _service.GetUserCollection(Int32.Parse(pageIndex), Int32.Parse(pageSize), sortColumn, sortOrder);
            var response = _mapper.MapUserCollectionToBasicUserCollection(result);
            return Ok(response);
        }

        [HttpGet]
        [Route("api/Users/Count")]
        public IHttpActionResult GetUserCount()
        {
            var result = _service.GetUserCount();
            return Ok(result);
        }

        // GET: api/Users/5
        public IHttpActionResult GetUser(int id)
        {
            var result = _service.GetUser(id);
            if (result == null)
            {
                return BadRequest("Not found.");
            }
            var response = _mapper.MapUserToBasicUser(result);
            return Ok(response);
        }

        // POST: api/Users
        public IHttpActionResult PostUser([FromBody] UserView user)
        {
            var model = _mapper.MapUserViewToUser(user);
            var result = _service.AddUser(model);
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
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public void Delete(int id)
        {
        }
    }
}
