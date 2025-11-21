public class Listing
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string SupportMessage { get; set; } = string.Empty;
    public string CustomUrl1 { get; set; } = string.Empty;
    public string CustomUrl2 { get; set; } = string.Empty;
    public string Visibility { get; set; } = string.Empty;
    public int Owner { get; set; } = 0;
    public string CreatedAt { get; set; } = string.Empty;

    public Listing()
    {
        CreatedAt = DateTime.UtcNow.ToString();
    }
}