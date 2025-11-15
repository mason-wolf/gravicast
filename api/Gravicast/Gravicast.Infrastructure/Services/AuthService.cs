using Gravicast.Infrastructure.Services;

public class AuthService : IAuthService
{

  private IUserRepository _userRepo;

  public AuthService(IUserRepository userRepository)
    {
        _userRepo = userRepository;
    }

  public Task<string> RegisterAsync(User user)
    {
        return _userRepo.RegisterAsync(user);
    }
}