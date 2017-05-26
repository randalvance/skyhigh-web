import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";

import { ProfessorsService } from "./professors.service";
import { ProfessorsListComponent } from "./professors-list.component";

import { professorsRouting } from "./professors.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    professorsRouting
  ],
  exports: [],
  declarations: [ ProfessorsListComponent ],
  providers: [ ProfessorsService ]
})
export class ProfessorsModule {

}
