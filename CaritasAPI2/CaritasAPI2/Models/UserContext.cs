using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;

namespace CaritasApi.Models
{
    public class UserContext : DbContext
    {
        public UserContext()
           : base("CaritasString")
        { }
        public static UserContext Create()
        {
            return new UserContext();
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Gender> Genders { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(t => t.name).IsRequired();
            modelBuilder.Entity<User>().Property(t => t.name).HasMaxLength(20);
            modelBuilder.Entity<User>().Property(t => t.lastName).IsRequired();
            modelBuilder.Entity<User>().Property(t => t.lastName).HasMaxLength(30);
            modelBuilder.Entity<User>().Property(t => t.oib).IsRequired();

        }
    }
}