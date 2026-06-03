import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoadingComponent } from './pages/loading/loading.component';

export const routes: Routes = [
  { path: 'loading', component: LoadingComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];
