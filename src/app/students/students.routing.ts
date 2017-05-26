import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list.component';
import { StudentEditComponent } from './student-edit.component';

const routes: Routes = [
  { path: 'students', component: StudentsListComponent },
  { path: 'students/new', component: StudentEditComponent },
];

export const studentRouting = RouterModule.forChild(routes);
