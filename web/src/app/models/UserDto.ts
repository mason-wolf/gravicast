export class UserDto {
    Id: number;
    FirstName: string;
    LastName: string;
    Phone: string;

    constructor() {
        this.Id = 0;
        this.FirstName = '';
        this.LastName = '';
        this.Phone = '';
    }
}