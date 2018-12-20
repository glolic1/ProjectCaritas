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
    public class AccommodationsController : ApiController
    {
        private ResidenceContext db = new ResidenceContext();

        // GET: api/Accommodations
        public IQueryable<Accommodation> GetAccommodations()
        {
            return db.Accommodations;
        }

        // GET: api/Accommodations/5
        [ResponseType(typeof(Accommodation))]
        public async Task<IHttpActionResult> GetAccommodation(int id)
        {
            Accommodation accommodation = await db.Accommodations.FindAsync(id);
            if (accommodation == null)
            {
                return NotFound();
            }

            return Ok(accommodation);
        }

        // PUT: api/Accommodations/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAccommodation(int id, Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != accommodation.Id)
            {
                return BadRequest();
            }

            db.Entry(accommodation).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationExists(id))
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

        // POST: api/Accommodations
        [ResponseType(typeof(Accommodation))]
        public async Task<IHttpActionResult> PostAccommodation(Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Accommodations.Add(accommodation);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = accommodation.Id }, accommodation);
        }

        // DELETE: api/Accommodations/5
        [ResponseType(typeof(Accommodation))]
        public async Task<IHttpActionResult> DeleteAccommodation(int id)
        {
            Accommodation accommodation = await db.Accommodations.FindAsync(id);
            if (accommodation == null)
            {
                return NotFound();
            }

            db.Accommodations.Remove(accommodation);
            await db.SaveChangesAsync();

            return Ok(accommodation);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccommodationExists(int id)
        {
            return db.Accommodations.Count(e => e.Id == id) > 0;
        }
    }
}