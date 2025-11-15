
using System.Security.Claims;
using Gravicast.Infrastructure.Persistence;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[ApiController]
[Route("api/[controller]")]
[Authorize]
public class ListingsController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly IListingService _listingService;
    private readonly IUserService _userService;
    public ListingsController(AppDbContext db, IListingService listingService, IUserService userService)
    {
        _db = db;
        _listingService = listingService;
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetListings()
    {
        var listings = await _db.Listings
            .Select(l => new { l.Id, l.Title })
            .ToListAsync();

        return Ok(listings);
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> CreateListing([FromBody] Listing listing)
    {
        var email = string.Empty;
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