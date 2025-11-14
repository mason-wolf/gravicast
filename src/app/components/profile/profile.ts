import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    MatButtonModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  constructor(private router: Router) {

  }

  goBack() {
    this.router.navigate(['/']);
  }
}
