import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";

import { StudentsService } from "./students.service";
import { StudentsListComponent } from "./students-list.component";
import { StudentEditComponent } from "./student-edit.component";
import { StudentEditFormComponent } from "./student-edit-form.component";

import { studentRouting } from "./students.routing";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    studentRouting,

    SharedModule
  ],
  exports: [ StudentEditComponent, StudentEditFormComponent ],
  declarations: [
    StudentEditComponent,
    StudentEditFormComponent,
    StudentsListComponent
  ],
  providers: [ StudentsService ]
})
export class StudentsModule {

}
