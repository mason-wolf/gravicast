using System.ComponentModel.DataAnnotations;

public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    [Required]
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set;} = string.Empty;
    [Required]
    public string Password{ get; set; } = string.Empty; 
    public string Role { get; set; } = "User";
    public string Gender { get; set; } = string.Empty;
}

