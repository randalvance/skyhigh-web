import { Routes, RouterModule } from '@angular/router';
import { EnrollmentWizardComponent } from './enrollment-wizard.component';
import { EnrollmentListComponent } from './enrollment-list.component';

const enrollmentRoutes: Routes = [
  { path: 'enrollment', component: EnrollmentWizardComponent },
  { path: 'enrollments', component: EnrollmentListComponent }
];

export const enrollmentRouting = RouterModule.forChild(enrollmentRoutes);
