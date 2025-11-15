public interface IListingService
{
    Task<string> CreateListingAsync(Listing listing);
}