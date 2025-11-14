import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Listing } from '../../models/listing';
import { ListingService } from '../../services/listing-service';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-create-listing',
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatButtonModule, 
  MatFormFieldModule, MatInputModule, MatRadioModule, FormsModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule],
  templateUrl: './create-listing.html',
  styleUrl: './create-listing.css'
})

export class CreateListing {
  listingForm: FormGroup;
  listing: Listing = {
    Title: '',
    Location: '',
    PhoneNumber: '',
    Email: '',
    SupportMessage: '',
    Description: '',
    Id: 0,
    ImageUrl: '',
    CustomUrl1: '',
    CustomUrl2: ''
  };

  
  constructor(private fb: FormBuilder, private router: Router, private listingService: ListingService) {
    this.listingForm = this.fb.group({
      start: [null],
      end: [null]
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  createListing() {
    // const startDate = this.listingForm.get('start')?.value;
    // const endDate = this.listingForm.get('end')?.value;
    // this.listing.StartDate = startDate;
    // this.listing.EndDate = endDate;
    this.listingService.createListing(this.listing);
    this.goBack();
  }

}
