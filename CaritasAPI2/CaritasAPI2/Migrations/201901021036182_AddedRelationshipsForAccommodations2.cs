namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedRelationshipsForAccommodations2 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Accommodations", "RoomID");
            DropColumn("dbo.Rooms", "BedID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Rooms", "BedID", c => c.Int());
            AddColumn("dbo.Accommodations", "RoomID", c => c.Int());
        }
    }
}
