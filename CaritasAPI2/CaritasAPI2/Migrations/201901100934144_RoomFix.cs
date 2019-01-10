namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RoomFix : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Rooms", name: "Accommodation_Id", newName: "AccommodationID");
            RenameIndex(table: "dbo.Rooms", name: "IX_Accommodation_Id", newName: "IX_AccommodationID");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Rooms", name: "IX_AccommodationID", newName: "IX_Accommodation_Id");
            RenameColumn(table: "dbo.Rooms", name: "AccommodationID", newName: "Accommodation_Id");
        }
    }
}
