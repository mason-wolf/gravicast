public interface IListingRepository
{
    Task<string> CreateListingAsync(Listing listing);
    Task<Listing> GetListingAsync(int listingId);
}