import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";

import { SubjectEditComponent, SubjectsListComponent, SubjectSelectionComponent } from ".";
import { subjectRouting } from './subjects.routing';
import { SubjectsService } from './subjects.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    subjectRouting,

    SharedModule
  ],
  exports: [
    SubjectSelectionComponent
  ],
  declarations: [
    SubjectEditComponent,
    SubjectsListComponent,
    SubjectSelectionComponent
  ],
  providers: [
    SubjectsService
  ]
})
export class SubjectsModule {

}
