import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BoxContainerComponent, QuickStartCardComponent, TextInputComponent, ValidationComponent, WizardComponent, WizardStepComponent } from "./components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    BoxContainerComponent,
    QuickStartCardComponent,
    TextInputComponent,
    ValidationComponent,
    WizardComponent,
    WizardStepComponent
  ],
  declarations: [
    BoxContainerComponent,
    QuickStartCardComponent,
    TextInputComponent,
    ValidationComponent,
    WizardComponent,
    WizardStepComponent
  ]
})
export class SharedModule {

}
