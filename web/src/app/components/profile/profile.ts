import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { UserDto } from '../../models/UserDto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    MatButtonModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  user: UserDto = new UserDto();

  constructor(private router: Router, private userService: UserService) {
    userService.getUser().subscribe((user: UserDto) => {
      this.user = user;
      console.log(this.user);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  updateProfile() {
    console.log(this.user);
  }
}
