import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { StudentsModule } from '../students/students.module';
import { SubjectsModule } from '../subjects/subjects.module';

import { EnrollmentConfirmationComponent } from './enrollment-confirmation.component';

import { EnrollmentWizardComponent } from './enrollment-wizard.component';

import { enrollmentRouting } from './enrollment.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    SubjectsModule,
    enrollmentRouting,

    StudentsModule
  ],
  exports: [EnrollmentWizardComponent],
  declarations: [
    EnrollmentConfirmationComponent,
    EnrollmentWizardComponent
  ],
  providers: []
})
export class EnrollmentModule {

}
