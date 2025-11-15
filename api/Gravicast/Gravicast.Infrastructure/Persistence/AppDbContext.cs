using Microsoft.EntityFrameworkCore;

namespace Gravicast.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<Listing> Listings => Set<Listing>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<User>().HasData(
            new User
            {
                Id = 1,
                Username = "admin",
                Role = "Admin",
                PasswordHash = "$2a$11$KHEZYESWEjkfptrbRD0wquOmePaUh2e4L1nQn4/KOUyFSI7/bDNYy"
            }
        );

        modelBuilder.Entity<Listing>().HasData(
            new { Id = 1, Title = "Downtown Loft", Price = 1800m },
            new { Id = 2, Title = "Suburban Home", Price = 3200m }
        );
    }
}