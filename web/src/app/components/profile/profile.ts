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
import {MatTabsModule} from '@angular/material/tabs';
import { ListingService } from '../../services/listing-service';
import { Listing } from '../../models/listing';

@Component({
  selector: 'app-profile',
  imports: [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    FormsModule,
    MatTabsModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user: UserDto = new UserDto();
  private _snackBar = inject(MatSnackBar);
  listings: Listing[] = [];
  
  constructor(
    private router: Router, 
    private userService: UserService,
    private listingService: ListingService
  ){}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser().subscribe((user: UserDto) => {
      this.user = user;
      this.getCreatedListings(user);
    });
  }

  /**
   * Gets listings created by the user.
   * @param user 
   */
  getCreatedListings(user: UserDto) {
    this.listingService.getListingsByUserId(user.Id).subscribe((listings: Listing[]) => {
      this.listings = listings;
      console.log(listings)
    });
  }

  editListing(listingId: number) {
    this.router.navigate([`/edit-listing/${listingId}`]);
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
