
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }
    [HttpGet]
    public async Task<IActionResult> GetUser()
    {
        var email = User.FindFirstValue(ClaimTypes.Name);
        if (email != null)
        {
            var user = await _userService.GetUserAsync(email);
            return Ok(user);
        }
        else
        {
            return BadRequest("Failed to retrieve user by email.");
        }
    }
}