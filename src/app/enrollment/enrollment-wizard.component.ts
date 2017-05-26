import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AppState, EnrollmentActions, LayoutActions, getEnrollmentStudent } from '../stores';
import { PageComponentBase, WizardComponent } from '../shared';

@Component({
  templateUrl: 'enrollment-wizard.component.html'
})
export class EnrollmentWizardComponent extends PageComponentBase implements OnInit, OnDestroy {

  @ViewChild(WizardComponent) wizard: WizardComponent;

  studentAddedSubscription: Subscription;

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private enrollmentActions: EnrollmentActions) {
    super(store, layoutActions, 'Enrollment Wizard');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.studentAddedSubscription.unsubscribe();
  }

  saveStudent(student) {
    this.store.dispatch(this.enrollmentActions.addStudent(student));

    this.studentAddedSubscription = this.store.select(getEnrollmentStudent).subscribe(student => {
      this.wizard.next();
    });
  }
}
