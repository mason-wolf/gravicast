
using Gravicast.Infrastructure.Persistence;

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
}
