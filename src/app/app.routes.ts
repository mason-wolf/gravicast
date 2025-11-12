import { Routes } from '@angular/router';
import { Listings } from './components/listings/listings';
import { CreateListing } from './components/create-listing/create-listing';

export const routes: Routes = [
  { path: '', component: Listings },
  { path: 'create-listing', component: CreateListing }
];