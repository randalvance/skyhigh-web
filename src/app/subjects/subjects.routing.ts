import { Routes, RouterModule } from '@angular/router';
import { SubjectsListComponent } from './subjects-list.component';

const routes: Routes = [
  { path: 'subjects', component: SubjectsListComponent }
];

export const subjectRouting = RouterModule.forChild(routes);
