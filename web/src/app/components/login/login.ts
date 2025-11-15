import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService, LoginCredentials } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  creds: LoginCredentials = { username: '', password: '' };
  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login(this.creds).subscribe({
      next: () => console.log("Login success!"),
      error: (err) => console.error("Login failed.")
    });
  }
}
