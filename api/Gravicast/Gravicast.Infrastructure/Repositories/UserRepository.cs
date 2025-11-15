using Gravicast.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Gravicast.Infrastructure.Services
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<string> RegisterAsync(User user)
        {
            if (user == null)
                throw new ArgumentNullException(nameof(user));
                
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return "User created.";
        }
    public async Task<UserDto?> GetUserAsync(string email)
    {
        var user = await _context.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.Email == email);

        if (user == null)
        {
            return null;
        }

        UserDto userDto = new UserDto();
        userDto.FirstName = user.FirstName;
        userDto.LastName = user.LastName;
        userDto.Id = user.Id;
        userDto.Phone = user.Phone;
        return userDto;
    }

public async Task<string> UpdateUserAsync(User user)
{
    if (user == null)
        throw new ArgumentNullException(nameof(user));

    var existingUser = await _context.Users
        .FirstOrDefaultAsync(u => u.Id == user.Id);

    if (existingUser == null)
        return "User not found.";

    existingUser.FirstName = user.FirstName;
    existingUser.LastName = user.LastName;
    existingUser.Phone = user.Phone;
    existingUser.Gender = user.Gender;

    await _context.SaveChangesAsync();
    return "User updated.";
}

  }
}
