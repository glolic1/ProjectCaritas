using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using CaritasAPI2.Services;

namespace CaritasAPI2.Models
{
    public class UserContext : DbContext
    {
        public UserContext()
           : base("CaritasString")
        {
            this.Configuration.LazyLoadingEnabled = true;
        }
        public static UserContext Create()
        {
            return new UserContext();
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<Nationality> Nationalities{ get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(t => t.Name).IsRequired();
            modelBuilder.Entity<User>().Property(t => t.Name).HasMaxLength(20);
            modelBuilder.Entity<User>().Property(t => t.LastName).IsRequired();
            modelBuilder.Entity<User>().Property(t => t.LastName).HasMaxLength(30);
            modelBuilder.Entity<User>().Property(t => t.Oib).IsRequired();

        }

        
    }
}