public interface IUserService
{
    Task<UserDto?> GetUserAsync(string email);
    Task<string> UpdateUserAsync(User user);
}