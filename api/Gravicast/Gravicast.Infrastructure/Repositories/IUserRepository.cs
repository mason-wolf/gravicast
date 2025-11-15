public interface IUserRepository
{
    Task<string> RegisterAsync(User user);
    Task<UserDto?> GetUserAsync(string email);
    Task<string> UpdateUserAsync(User user);
}