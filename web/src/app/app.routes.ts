import { Routes } from '@angular/router';
import { Listings } from './components/listings/listings';
import { CreateListing } from './components/create-listing/create-listing';
import { CreateGravicast } from './components/create-gravicast/create-gravicast';
import { Profile } from './components/profile/profile';
import { Login } from './components/login/login';
import { Resgister } from './components/resgister/resgister';

export const routes: Routes = [
  { path: '', component: Listings },
  { path: 'create-listing', component: CreateListing },
  { path: 'edit-listing/:id', component: CreateListing },
  { path: 'create-gravicast', component: CreateGravicast},
  { path: 'profile', component: Profile},
  { path: 'login', component: Login},
  { path: 'register', component: Resgister}
];
