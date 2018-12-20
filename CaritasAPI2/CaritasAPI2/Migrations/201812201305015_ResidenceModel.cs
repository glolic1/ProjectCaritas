namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ResidenceModel : DbMigration
    {
        public override void Up()
        {
           
            CreateTable(
                "dbo.Accommodations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AccommodationName = c.String(nullable: false, maxLength: 20),
                        Address = c.String(nullable: false),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Beds",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BedName = c.String(nullable: false, maxLength: 30),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoomName = c.String(nullable: false, maxLength: 30),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
        }
        
        public override void Down()
        {
            
            
            DropTable("dbo.Rooms");
            DropTable("dbo.Beds");
            DropTable("dbo.Accommodations");
            
        }
    }
}
