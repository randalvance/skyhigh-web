import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";

import { SubjectEditComponent, SubjectsListComponent } from ".";
import { subjectRouting } from './subjects.routing';
import { SubjectsService } from './subjects.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    subjectRouting,

    SharedModule
  ],
  exports: [

  ],
  declarations: [
    SubjectEditComponent,
    SubjectsListComponent
  ],
  providers: [
    SubjectsService
  ]
})
export class SubjectsModule {

}
