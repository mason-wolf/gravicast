import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../models/UserDto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5076/api/user';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<UserDto>(`${this.apiUrl}`);
  }
}
