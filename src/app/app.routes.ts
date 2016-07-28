import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { LoginComponent } from './login';
import { AppComponent } from './';

const routes: RouterConfig = [
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'login', component: LoginComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];