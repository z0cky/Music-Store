import { Routes } from '@angular/router';
import { ArtistsComponent } from './pages/artists/artists.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
];
