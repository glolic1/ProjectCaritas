namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialModel : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Users", new[] { "gender_id" });
            DropIndex("dbo.Users", new[] { "nationality_id" });
            CreateIndex("dbo.Users", "Gender_Id");
            CreateIndex("dbo.Users", "Nationality_Id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Users", new[] { "Nationality_Id" });
            DropIndex("dbo.Users", new[] { "Gender_Id" });
            CreateIndex("dbo.Users", "nationality_id");
            CreateIndex("dbo.Users", "gender_id");
        }
    }
}
