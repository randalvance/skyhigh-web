import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent, data: [ { title: 'Quick Start Panel' }]}
];

export const appRouting = RouterModule.forRoot(appRoutes);
