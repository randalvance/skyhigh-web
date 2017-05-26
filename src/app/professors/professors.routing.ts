import { Routes, RouterModule } from '@angular/router';
import { ProfessorsListComponent } from './professors-list.component';

const professorRoutes: Routes = [
  { path: 'professors', component: ProfessorsListComponent }
];

export const professorsRouting = RouterModule.forChild(professorRoutes);
