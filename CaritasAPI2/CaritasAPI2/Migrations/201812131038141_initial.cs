namespace CaritasAPI2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Genders",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        genderName = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false, maxLength: 20),
                        lastName = c.String(nullable: false, maxLength: 30),
                        oib = c.Double(nullable: false),
                        address = c.String(),
                        phoneNumber = c.String(),
                        gender_id = c.Int(),
                        nationality_id = c.Int(),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Genders", t => t.gender_id)
                .ForeignKey("dbo.Nationalities", t => t.nationality_id)
                .Index(t => t.gender_id)
                .Index(t => t.nationality_id);
            
            CreateTable(
                "dbo.Nationalities",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        nationalityName = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Users", "nationality_id", "dbo.Nationalities");
            DropForeignKey("dbo.Users", "gender_id", "dbo.Genders");
            DropIndex("dbo.Users", new[] { "nationality_id" });
            DropIndex("dbo.Users", new[] { "gender_id" });
            DropTable("dbo.Nationalities");
            DropTable("dbo.Users");
            DropTable("dbo.Genders");
        }
    }
}
