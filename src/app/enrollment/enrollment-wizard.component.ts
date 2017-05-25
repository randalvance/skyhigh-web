import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, LayoutActions } from "../stores";
import { EnrollmentActions } from "../stores/enrollment";
import { WizardComponent } from "../shared/components";
import { PageComponentBase } from '../shared/components';

@Component({
  moduleId: module.id,
  selector: "na-enrollment-wizard",
  templateUrl: "enrollment-wizard.component.html"
})
export class EnrollmentWizardComponent extends PageComponentBase implements OnInit {

  @ViewChild(WizardComponent) wizard: WizardComponent;

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private enrollmentActions: EnrollmentActions) {
      super(store, layoutActions, 'Enrollment Wizard');
  }

  ngOnInit(): void {
  }

  saveStudent(student) {
    this.store.dispatch(this.enrollmentActions.addStudent(student));

    // this.store.select("enrollment").subscribe(enrollmentStore => {
    //   this.wizard.next();
    // });
  }
}
