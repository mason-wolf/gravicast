import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

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

  user: User = {
    Id: 0,
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Password: '',
    Gender: '',
    Role: ''
  };
  
  constructor(private auth: AuthService, private router: Router) {}

onSubmit() {
  this.auth.login(this.user).subscribe({
    next: () => {
      this.router.navigate(['/']).then(() => {
        window.location.reload(); 
      });
    },
    error: (err) => console.error("Login failed.")
  });
}

}
