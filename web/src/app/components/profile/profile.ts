import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { UserDto } from '../../models/UserDto';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user: UserDto = new UserDto();
  private _snackBar = inject(MatSnackBar);

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser().subscribe((user: UserDto) => {
      this.user = user;
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  updateProfile() {
    let user = new User();
    user.FirstName = this.user.FirstName;
    user.LastName = this.user.LastName;
    user.Phone = this.user.Phone;

    this.userService.updateUser(user).subscribe(res => {
      this.openSnackBar("Profiled updated!", "OK");
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
