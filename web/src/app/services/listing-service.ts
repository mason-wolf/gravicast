import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
    private apiUrl = 'http://localhost:5076/api/listings';

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
    getListings() : Observable<Listing[]> {
      return this.http.get<Listing[]>(`${this.apiUrl}`);
    }
    
    /**
     * Gets listings by user ID.
     * @param userId 
     * @returns  
     */
    getListingsByUserId(userId: number) : Observable<Listing[]> {
      return this.http.get<Listing[]>(`${this.apiUrl}/user/${userId}`);
    }
  }