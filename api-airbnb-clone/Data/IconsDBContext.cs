using api_airbnb_clone.Models;
using Microsoft.EntityFrameworkCore;

namespace api_airbnb_clone.Data
{
    public class IconsDBContext : DbContext
    {
        public IconsDBContext(DbContextOptions opcoes) : base(opcoes) 
        { 
            
        }

        public DbSet<Icons> Icones { get; set; }
    }
}