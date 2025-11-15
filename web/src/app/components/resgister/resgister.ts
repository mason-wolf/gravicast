import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-resgister',
  imports: [
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatFormFieldModule,
    MatInputModule, MatRadioModule
  ],
  templateUrl: './resgister.html',
  styleUrl: './resgister.css',
})
export class Resgister {
  
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

    constructor(private authService: AuthService) {}

    register() {
      this.authService.register(this.user).subscribe(res => {
        console.log(res);
      })
    }
}
