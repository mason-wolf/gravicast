public interface IUserService
{
    Task<UserDto?> GetUserAsync(string email);
}