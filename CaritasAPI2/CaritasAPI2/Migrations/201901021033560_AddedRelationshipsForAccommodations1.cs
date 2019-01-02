namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedRelationshipsForAccommodations1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Rooms", "BedID", c => c.Int());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Rooms", "BedID");
        }
    }
}
