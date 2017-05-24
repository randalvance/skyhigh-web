import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../stores";
import { EnrollmentActions } from "../stores/enrollment";
import { WizardComponent } from "../shared/components";

@Component({
  moduleId: module.id,
  selector: "na-enrollment-wizard",
  templateUrl: "enrollment-wizard.component.html"
})
export class EnrollmentWizardComponent implements OnInit {

  @ViewChild(WizardComponent) wizard: WizardComponent;

  constructor(
    private store: Store<AppState>,
    private enrollmentActions: EnrollmentActions) {
  }

  ngOnInit(): void {
    // this.pageMetadataStore.dispatch({
    //   type: PageMetadataActionTypes.pageTitleChanged,
    //   payload: "Enroll New Student"
    // });
  }

  saveStudent(student) {
    this.store.dispatch(this.enrollmentActions.addStudent(student));

    // this.store.select("enrollment").subscribe(enrollmentStore => {
    //   this.wizard.next();
    // });
  }
}
