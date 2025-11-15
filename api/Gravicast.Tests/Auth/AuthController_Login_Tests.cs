using Gravicast.Infrastructure.Persistence;
using Gravicast.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moq;

namespace Gravicast.Tests.Auth
{
    public class AuthController_Login_Tests
    {
        private readonly AppDbContext _db;
        private readonly Mock<IConfiguration> _configMock;
        private IAuthService _authService;
        private IUserRepository _userRepo;
        public AuthController_Login_Tests()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase($"TestDb_{Guid.NewGuid()}")
                .Options;

            _db = new AppDbContext(options);

            _db.Users.Add(new User
            {
                Email = "test@example.com",
                Password = BCrypt.Net.BCrypt.HashPassword("Password123"),
                Role = "User"
            });
            _db.SaveChanges();

            _configMock = new Mock<IConfiguration>();
            _configMock.Setup(c => c["Jwt:Key"]).Returns("SuperSecretTestKey1234567890123456!");
            _configMock.Setup(c => c["Jwt:Issuer"]).Returns("TestIssuer");
            _configMock.Setup(c => c["Jwt:Audience"]).Returns("TestAudience");

            _userRepo = new UserRepository(_db);
            _authService = new AuthService(_userRepo);
        }

        [Fact]
        public async Task Login_ValidEmailAndPassword_ReturnsJwtToken()
        {
            var controller = new AuthController(_db, _configMock.Object, _authService);
            var loginUser = new User
            {
                Email = "test@example.com",
                Password = "Password123" 
            };

            var result = await controller.Login(loginUser);

            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.NotNull(okResult.Value);

            var tokenProperty = okResult.Value.GetType().GetProperty("token");
            Assert.NotNull(tokenProperty);

            var token = tokenProperty.GetValue(okResult.Value) as string;
            Assert.False(string.IsNullOrEmpty(token));
        }

        [Fact]
        public async Task Login_WrongPassword_ReturnsUnauthorized()
        {
            var controller = new AuthController(_db, _configMock.Object, _authService);
            var loginUser = new User
            {
                Email = "test@example.com",
                Password = "WrongPassword"
            };

            var result = await controller.Login(loginUser);

            Assert.IsType<UnauthorizedObjectResult>(result);
        }

    [Fact]
    public async Task Should_FailToCreateUser_OnInvalidForm()
    {

        var controller = new AuthController(_db, _configMock.Object, _authService);
        var user = new User();

        controller.ModelState.AddModelError("Email", "Required");

        var result = await controller.Register(user);

        Assert.IsAssignableFrom<BadRequestResult>(result);
    }


        [Fact]
        public async Task Login_WrongEmail_ReturnsUnauthorized()
        {
            var controller = new AuthController(_db, _configMock.Object, _authService);
            var loginUser = new User
            {
                Email = "nonexistent@example.com",
                Password = "Password123"
            };

            var result = await controller.Login(loginUser);
            Assert.IsType<UnauthorizedObjectResult>(result);
        }

        [Fact]
        public async Task Login_EmptyEmail_ReturnsUnauthorized()
        {
            var controller = new AuthController(_db, _configMock.Object, _authService);
            var loginUser = new User
            {
                Email = "",
                Password = "Password123"
            };

            var result = await controller.Login(loginUser);

            Assert.IsType<UnauthorizedObjectResult>(result);
            
        }
    }
}
