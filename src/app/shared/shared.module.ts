import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BoxContainerComponent, QuickStartCardComponent, LabelComponent, TextInputComponent, ValidationComponent, WizardComponent, WizardStepComponent, LoaderComponent } from "./components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    BoxContainerComponent,
    QuickStartCardComponent,
    LabelComponent,
    TextInputComponent,
    ValidationComponent,
    WizardComponent,
    WizardStepComponent,
    LoaderComponent
  ],
  declarations: [
    BoxContainerComponent,
    QuickStartCardComponent,
    LabelComponent,
    TextInputComponent,
    ValidationComponent,
    WizardComponent,
    WizardStepComponent,
    LoaderComponent
  ]
})
export class SharedModule {

}
