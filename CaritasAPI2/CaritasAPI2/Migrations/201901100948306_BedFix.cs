namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BedFix : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Beds", name: "Room_Id", newName: "RoomID");
            RenameIndex(table: "dbo.Beds", name: "IX_Room_Id", newName: "IX_RoomID");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Beds", name: "IX_RoomID", newName: "IX_Room_Id");
            RenameColumn(table: "dbo.Beds", name: "RoomID", newName: "Room_Id");
        }
    }
}
