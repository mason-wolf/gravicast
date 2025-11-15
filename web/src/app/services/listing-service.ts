import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
    listings: Listing[] = [];

    constructor(private http: HttpClient) {}
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