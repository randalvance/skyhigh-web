import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";

import { StudentsService, StudentsListComponent, StudentEditComponent, StudentEditFormComponent, studentRouting } from ".";

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
