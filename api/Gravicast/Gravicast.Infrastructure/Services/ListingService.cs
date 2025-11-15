
public class ListingService : IListingService
{
    private IListingRepository _listingRepo;
    public ListingService(IListingRepository listingRepository)
    {
        _listingRepo = listingRepository;
    }
  public Task<string> CreateListingAsync(Listing listing)
    {
        return _listingRepo.CreateListingAsync(listing);
    }
}