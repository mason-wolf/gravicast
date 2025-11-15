import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth-service';
import { CommonModule } from '@angular/common'; 
import { UserService } from './services/user-service';
import { UserDto } from './models/UserDto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gravicast');

  _isLoggedIn = false;
  user: UserDto = new UserDto();

  constructor(
    private router: Router, 
    private authService: AuthService,
    private userService: UserService) {

    this._isLoggedIn = this.authService.isLoggedIn();
    if (this._isLoggedIn) {
      this.userService.getUser().subscribe(res => {
        this.user = res;
      });
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }

  manageProfile() {
    this.router.navigate(['/profile']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
      this.router.navigate(['/']).then(() => {
        window.location.reload(); 
      });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
