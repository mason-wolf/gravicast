import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Gravicast } from '../../models/gravicast';

@Component({
  selector: 'app-create-gravicast',
  imports: [
    CommonModule, MatButtonModule, 
    MatFormFieldModule, MatInputModule, 
    MatRadioModule, FormsModule, 
    MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule, MatTooltipModule
],
  templateUrl: './create-gravicast.html',
  styleUrl: './create-gravicast.css',
})
export class CreateGravicast {

  gravicast: Gravicast = {
    Title: '',
    Id: 0,
    Description: '',
    SavedMessage: '',
    At: '',
    By: '',
    StartTime: '',
    EndTime: '',
    ImageUrl: ''
  }

  constructor(private router: Router) {
    
  }

  goBack() {
    this.router.navigate(['']);
  }
  
  createGravicast() {
    console.log(this.gravicast);
  }
}
