namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedRelationshipsForAccommodations : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Accommodations", "RoomID", c => c.Int());
            AddColumn("dbo.Beds", "Room_Id", c => c.Int());
            AddColumn("dbo.Rooms", "Accommodation_Id", c => c.Int());
            CreateIndex("dbo.Rooms", "Accommodation_Id");
            CreateIndex("dbo.Beds", "Room_Id");
            AddForeignKey("dbo.Beds", "Room_Id", "dbo.Rooms", "Id");
            AddForeignKey("dbo.Rooms", "Accommodation_Id", "dbo.Accommodations", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Rooms", "Accommodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Beds", "Room_Id", "dbo.Rooms");
            DropIndex("dbo.Beds", new[] { "Room_Id" });
            DropIndex("dbo.Rooms", new[] { "Accommodation_Id" });
            DropColumn("dbo.Rooms", "Accommodation_Id");
            DropColumn("dbo.Beds", "Room_Id");
            DropColumn("dbo.Accommodations", "RoomID");
        }
    }
}
