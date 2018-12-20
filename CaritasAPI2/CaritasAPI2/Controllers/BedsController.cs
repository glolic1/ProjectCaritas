using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using CaritasAPI2.Models;

namespace CaritasAPI2.Controllers
{
    public class BedsController : ApiController
    {
        private ResidenceContext db = new ResidenceContext();

        // GET: api/Beds
        public IQueryable<Bed> GetBeds()
        {
            return db.Beds;
        }

        // GET: api/Beds/5
        [ResponseType(typeof(Bed))]
        public async Task<IHttpActionResult> GetBed(int id)
        {
            Bed bed = await db.Beds.FindAsync(id);
            if (bed == null)
            {
                return NotFound();
            }

            return Ok(bed);
        }

        // PUT: api/Beds/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutBed(int id, Bed bed)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bed.Id)
            {
                return BadRequest();
            }

            db.Entry(bed).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BedExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Beds
        [ResponseType(typeof(Bed))]
        public async Task<IHttpActionResult> PostBed(Bed bed)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Beds.Add(bed);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = bed.Id }, bed);
        }

        // DELETE: api/Beds/5
        [ResponseType(typeof(Bed))]
        public async Task<IHttpActionResult> DeleteBed(int id)
        {
            Bed bed = await db.Beds.FindAsync(id);
            if (bed == null)
            {
                return NotFound();
            }

            db.Beds.Remove(bed);
            await db.SaveChangesAsync();

            return Ok(bed);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BedExists(int id)
        {
            return db.Beds.Count(e => e.Id == id) > 0;
        }
    }
}