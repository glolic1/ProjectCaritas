using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using CaritasAPI2.Services;

namespace CaritasAPI2.Models
{
    public class ResidenceContext : DbContext
    {
        public ResidenceContext()
           : base("CaritasString")
        {
            this.Configuration.LazyLoadingEnabled = true;
        }
        public static ResidenceContext Create()
        {
            return new ResidenceContext();
        }
        public DbSet<Accommodation> Accommodations { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Bed> Beds { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Accommodation>().Property(t => t.AccommodationName).IsRequired();
            modelBuilder.Entity<Accommodation>().Property(t => t.AccommodationName).HasMaxLength(20);
            modelBuilder.Entity<Accommodation>().Property(t => t.Address).IsRequired();
            modelBuilder.Entity<Bed>().Property(t => t.BedName).HasMaxLength(30);
            modelBuilder.Entity<Bed>().Property(t => t.BedName).IsRequired();

            modelBuilder.Entity<Room>().Property(t => t.RoomName).IsRequired();
            modelBuilder.Entity<Room>().Property(t => t.RoomName).HasMaxLength(30);
        }
    }
}