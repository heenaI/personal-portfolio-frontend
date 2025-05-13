import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to home
    { path: 'home', component: HomeComponent }, // lazy loaded route home
    { path: '**', redirectTo: 'home' } // wildcard route to redirect to home
];
