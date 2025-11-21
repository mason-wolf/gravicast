/// <summary>
/// Service interface for managing listings.
/// </summary>
public interface IListingService
{
    /// <summary>
    /// Create a listing.
    /// </summary>
    /// <param name="listing"></param>
    /// <returns></returns>
    Task<string> CreateListingAsync(Listing listing);

    /// <summary>
    /// Gets listings.
    /// </summary>
    /// <param name="page"></param>
    /// <param name="size"></param>
    /// <returns></returns>
    Task<List<Listing>> GetListingsAsync(int page, int size);
    /// <summary>
    /// Gets listings by user ID.
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    Task<List<Listing>> GetListingsByUserIdAsync(int userId);
}