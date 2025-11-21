using Gravicast.Infrastructure.Persistence;
using Gravicast.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestPlatform.ObjectModel;
using Moq;

namespace Gravicast.Tests.Listings
{
    public class ListingController_Tests
    {
    private readonly AppDbContext _db;
    private readonly IListingService _listingService;
    private readonly IListingRepository _listingRepo;
    private readonly IUserRepository _userRepo;
    private readonly IUserService _userService;
        public ListingController_Tests()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase($"TestDb_{Guid.NewGuid()}")
                .Options;

            _db = new AppDbContext(options);
            _listingRepo = new ListingRepository(_db);
            _listingService = new ListingService(_listingRepo);
            _userRepo = new UserRepository(_db);
            _userService = new UserService(_userRepo);
        }

        [Fact]
        public async Task ShouldNotCreateListing_OnInvalidEmail()
        {
            var controller = new ListingsController( _listingService, _userService);
            var result = await controller.CreateListing(new Listing());
            Assert.IsAssignableFrom<BadRequestObjectResult>(result);
        }
    }
}