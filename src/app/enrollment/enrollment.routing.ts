import { Routes, RouterModule } from "@angular/router";
import { EnrollmentWizardComponent } from "./enrollment-wizard.component";

const enrollmentRoutes: Routes = [
  { path: "enrollment", component: EnrollmentWizardComponent }
];

export const enrollmentRouting = RouterModule.forChild(enrollmentRoutes);
