import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { AddStory } from './pages/add-story/add-story';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'products', component: Products },
  { path: 'stories', component: Stories },
  { path: 'stories/add', component: AddStory },
  { path: 'register', component: Register },
];
