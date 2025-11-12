import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
    listings: Listing[] = [];

    /**
     * Creates a listing.
     * @param listing 
     */
    createListing(listing : Listing) {
      this.listings.push(listing);
    }

    /**
     * Gets listings.
     * @returns 
     */
    getListings() : Listing[] {
      return this.listings;
    }
}
