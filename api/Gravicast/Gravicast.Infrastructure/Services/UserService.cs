public class UserService : IUserService
{
    IUserRepository _userRepo;

    public UserService(IUserRepository userRepo)
    {
        _userRepo = userRepo;
    }

    public Task<UserDto?> GetUserAsync(string email)
    {
        return _userRepo.GetUserAsync(email);
    }
}