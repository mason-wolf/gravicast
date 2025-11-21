

public class ListingService : IListingService
{
    private IListingRepository _listingRepo;
    public ListingService(IListingRepository listingRepository)
    {
        _listingRepo = listingRepository;
    }

  public async Task<string> CreateListingAsync(Listing listing)
    {
        return await _listingRepo.CreateListingAsync(listing);
    }

  public async Task<List<Listing>> GetListingsAsync(int page, int size)
    {
        return await _listingRepo.GetListingsAsync(page, size);
    }

  public async Task<List<Listing>> GetListingsByUserIdAsync(int userId)
    {
        return await _listingRepo.GetListingsByUserIdAsync(userId);
    }
}