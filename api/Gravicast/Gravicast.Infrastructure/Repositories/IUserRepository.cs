public interface IUserRepository
{
    Task<string> RegisterAsync(User user);
}