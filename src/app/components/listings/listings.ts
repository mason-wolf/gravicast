import { Component, ChangeDetectionStrategy, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ListingService } from '../../services/listing-service';
import { Listing } from '../../models/listing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [
            CommonModule, MatButtonModule, 
            MatCardModule, MatChipsModule, 
            MatTabsModule, MatFormFieldModule, 
            MatInputModule, FormsModule, 
            MatDialogModule, MatMenuModule,
            MatIconModule
          ],
  templateUrl: './listings.html',
  styleUrls: ['./listings.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

  export class Listings {
    
    readonly dialog = inject(MatDialog);

    listings: Listing[] = [];

    constructor(
      private router: Router, 
      private listingService: ListingService
    ) {
        this.listings = listingService.getListings();
        console.log(this.listings);
    }

    createListing() {
      this.router.navigate(['/create-listing']);
    }

    createGravicast() {
      this.router.navigate(['/create-gravicast']);
    }
    openDialog() {
      const dialogRef = this.dialog.open(LocationDialog, {
        width: '350px',
        height: '450px'
      });
    }
  }

  @Component({
  selector: 'location-dialog',
  templateUrl: 'location-dialog.html',
  imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDialog {
    private readonly _formBuilder = inject(FormBuilder);

    readonly location = this._formBuilder.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
}

