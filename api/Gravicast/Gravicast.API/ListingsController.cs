
using System.Security.Claims;
using Gravicast.Infrastructure.Persistence;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[ApiController]
[Route("api/[controller]")]
public class ListingsController : ControllerBase
{
    private readonly IListingService _listingService;
    private readonly IUserService _userService;
    public ListingsController(IListingService listingService, IUserService userService)
    {
        _listingService = listingService;
        _userService = userService;
    }

    /// <summary>
    /// Gets listings.
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<IActionResult> GetListings()
    {
        var listings = await _listingService.GetListingsAsync(1, 100);
        return Ok(listings);
    }

    /// <summary>
    /// Gets listings by user ID.
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetListingsByUserId(int userId)
    {
        var listings = await _listingService.GetListingsByUserIdAsync(userId);
        return Ok(listings);
    }

    /// <summary>
    /// Create a listing.
    /// </summary>
    /// <param name="listing"></param>
    /// <returns></returns>
    [HttpPost]
    [Authorize]
    public async Task<IActionResult> CreateListing([FromBody] Listing listing)
    {

    string? email;

    try
        {
            email = User.FindFirstValue(ClaimTypes.Name);
        }
        catch(ArgumentNullException)
        {
            return BadRequest("Authentication failure.");
        }

        if (email == null)
            return Unauthorized();

        var existingUser = await _userService.GetUserAsync(email);
        if (existingUser == null)
            return BadRequest("User not found.");
        
        listing.Owner = existingUser.Id;
        var result = await _listingService.CreateListingAsync(listing);
        return Ok(new { message = result });
    }
}