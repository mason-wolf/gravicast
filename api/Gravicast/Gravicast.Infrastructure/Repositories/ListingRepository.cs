
using Gravicast.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

public class ListingRepository : IListingRepository
{
    private readonly AppDbContext _context;

    public ListingRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<string> CreateListingAsync(Listing listing)
    {
            await _context.Listings.AddAsync(listing);
            await _context.SaveChangesAsync();
            return "Listing created.";
    }

    public Task<Listing> GetListingAsync(int listingId)
    {
        throw new NotImplementedException();
    }

    public async Task<List<Listing>> GetListingsAsync(int page = 1, int pageSize = 20)
        {
            return await _context.Listings
                .AsNoTracking()
                .OrderByDescending(l => l.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

  public async Task<List<Listing>> GetListingsByUserIdAsync(int userId)
    {
        return await _context.Listings
            .AsNoTracking()
            .Where(l => l.Owner == userId)
            .OrderByDescending(l => l.CreatedAt)
            .ToListAsync();
    }
}
