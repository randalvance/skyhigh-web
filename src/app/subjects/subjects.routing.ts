import { Routes, RouterModule } from '@angular/router';
import { SubjectEditComponent, SubjectsListComponent } from '.';

const routes: Routes = [
  { path: 'subjects', component: SubjectsListComponent },
  { path: 'subjects/new', component: SubjectEditComponent }
];

export const subjectRouting = RouterModule.forChild(routes);
