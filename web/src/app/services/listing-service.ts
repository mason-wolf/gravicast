import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
    private apiUrl = 'http://localhost:5076/api/listings';

    listings: Listing[] = [];

    constructor(private http: HttpClient) {}
    /**
     * Creates a listing.
     * @param listing 
     */
    createListing(listing : Listing) {
      return this.http.post<Listing>(`${this.apiUrl}`, listing);
    }

    /**
     * Gets listings.
     * @returns 
     */
    getListings() : Listing[] {
      return this.listings;
    }
  }