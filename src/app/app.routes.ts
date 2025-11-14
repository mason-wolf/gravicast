import { Routes } from '@angular/router';
import { Listings } from './components/listings/listings';
import { CreateListing } from './components/create-listing/create-listing';
import { CreateGravicast } from './components/create-gravicast/create-gravicast';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  { path: '', component: Listings },
  { path: 'create-listing', component: CreateListing },
  { path: 'create-gravicast', component: CreateGravicast},
  { path: 'profile', component: Profile}
];