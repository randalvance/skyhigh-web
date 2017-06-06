import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AppState, EnrollmentActions, LayoutActions, getEnrollmentStudent } from '../stores';
import { PageComponentBase, WizardComponent } from '../shared';
import { Student } from '../students';

@Component({
  templateUrl: 'enrollment-wizard.component.html'
})
export class EnrollmentWizardComponent extends PageComponentBase implements OnInit, OnDestroy {

  @ViewChild(WizardComponent) wizard: WizardComponent;

  subscriptions: Subscription = new Subscription();

  student$: Observable<Student>;

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private enrollmentActions: EnrollmentActions) {
    super(store, layoutActions, 'Enrollment Wizard');
  }

  ngOnInit(): void {
    this.student$ = this.store.select(getEnrollmentStudent);

    // Reset
    this.store.dispatch(this.enrollmentActions.setStudentToEnroll(null));

    this.subscriptions.add(this.student$.subscribe(student => {
      if (student) {
        this.wizard.next();
      }
    }));
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  saveStudent(student) {
    this.store.dispatch(this.enrollmentActions.setStudentToEnroll(student));
  }
}
