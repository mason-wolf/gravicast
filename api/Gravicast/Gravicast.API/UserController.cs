
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
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

[HttpPut]
[Authorize]
    public async Task<IActionResult> UpdateUser([FromBody] User user)
    {
        if (user == null)
            return BadRequest("User data is required.");

        try
        {
            var email = User.FindFirstValue(ClaimTypes.Name);
            if (email == null)
                return Unauthorized();

            var existingUser = await _userService.GetUserAsync(email);
            if (existingUser == null)
                return BadRequest("User not found.");

            user.Id = existingUser.Id;
            var result = await _userService.UpdateUserAsync(user);
            return Ok(new { message = result });
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

}