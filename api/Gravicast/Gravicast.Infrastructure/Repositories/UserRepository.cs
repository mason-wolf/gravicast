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

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
    }
}
