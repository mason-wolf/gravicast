using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ListingsController : ControllerBase
{
    [HttpGet]
    [Authorize] 
    public IActionResult GetListings()
    {
        var listings = new[]
        {
            new { Id = 1, Title = "Downtown Apartment", Price = 1200 },
            new { Id = 2, Title = "Suburban House", Price = 2500 }
        };

        return Ok(listings);
    }
}