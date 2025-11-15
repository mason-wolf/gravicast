import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../models/UserDto';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5076/api/user';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<UserDto>(`${this.apiUrl}`);
  }

  updateUser(user: User) {
    return this.http.put(`${this.apiUrl}`, user);
  }
}
