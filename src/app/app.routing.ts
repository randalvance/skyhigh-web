import { Routes, RouterModule } from '@angular/router';
import { Four04Component, WelcomeComponent } from './components';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent, data: [ { title: 'Quick Start Panel' }] },
  { path: '**', component: Four04Component, data: [{ title: '404'} ] }
];

export const appRouting = RouterModule.forRoot(appRoutes);
