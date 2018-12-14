namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PopravakContexta : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Users", name: "Gender_Id", newName: "GenderID");
            RenameColumn(table: "dbo.Users", name: "Nationality_Id", newName: "NationalityID");
            RenameIndex(table: "dbo.Users", name: "IX_Nationality_Id", newName: "IX_NationalityID");
            RenameIndex(table: "dbo.Users", name: "IX_Gender_Id", newName: "IX_GenderID");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Users", name: "IX_GenderID", newName: "IX_Gender_Id");
            RenameIndex(table: "dbo.Users", name: "IX_NationalityID", newName: "IX_Nationality_Id");
            RenameColumn(table: "dbo.Users", name: "NationalityID", newName: "Nationality_Id");
            RenameColumn(table: "dbo.Users", name: "GenderID", newName: "Gender_Id");
        }
    }
}
