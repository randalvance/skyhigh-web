import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { StudentsModule } from '../students/students.module';
import { SubjectsModule } from '../subjects/subjects.module';

import { EnrollmentConfirmationComponent } from './enrollment-confirmation.component';

import { EnrollmentWizardComponent } from './enrollment-wizard.component';
import { EnrollmentListComponent } from './enrollment-list.component';

import { enrollmentRouting } from './enrollment.routing';
import { EnrollmentService } from './enrollment.service';
import { StudentsService } from '../students/students.service';

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
    EnrollmentListComponent,
    EnrollmentWizardComponent
  ],
  providers: [
    EnrollmentService
  ]
})
export class EnrollmentModule {

}
