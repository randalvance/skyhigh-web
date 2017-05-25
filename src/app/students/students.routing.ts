import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list.component';
import { StudentEditComponent } from './student-edit.component';

const studentRoutes: Routes = [
  { path: 'students', component: StudentsListComponent, data: { title: 'All Students' } },
  { path: 'students/new', component: StudentEditComponent, data: { title: 'New Student' } }
];

export const studentRouting = RouterModule.forChild(studentRoutes);
