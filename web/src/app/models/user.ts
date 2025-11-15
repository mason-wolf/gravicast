export class User {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    Password: string;
    Gender: string;
    Role: string;

    constructor() {
        this.Id = 0;
        this.FirstName = "";
        this.LastName = "";
        this.Email = "";
        this.Phone = "";
        this.Password = "";
        this.Gender = "";
        this.Role = "";
    }
}