import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'products', component: Products },
];
