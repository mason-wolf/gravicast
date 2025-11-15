public class UserService : IUserService
{
    IUserRepository _userRepo;

    public UserService(IUserRepository userRepo)
    {
        _userRepo = userRepo;
    }

    public async Task<UserDto?> GetUserAsync(string email)
    {
        return await _userRepo.GetUserAsync(email);
    }

    public async Task<string> UpdateUserAsync(User user)
    {
        return await _userRepo.UpdateUserAsync(user);
    }
}