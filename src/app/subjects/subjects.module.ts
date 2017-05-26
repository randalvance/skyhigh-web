import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";

import { SubjectsListComponent } from "./subjects-list.component";
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
    SubjectsListComponent
  ],
  providers: [
    SubjectsService
  ]
})
export class SubjectsModule {

}
