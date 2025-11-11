import { Component, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule, MatButtonModule, 
    MatCardModule, MatChipsModule, MatTabsModule,
  MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './listings.html',
  styleUrls: ['./listings.css'],
  encapsulation: ViewEncapsulation.None
})

  export class Listings {
}


