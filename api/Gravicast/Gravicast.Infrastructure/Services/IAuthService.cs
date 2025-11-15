namespace Gravicast.Infrastructure.Services
{
    public interface IAuthService
    {
        Task<string> RegisterAsync(User user);
    }
}