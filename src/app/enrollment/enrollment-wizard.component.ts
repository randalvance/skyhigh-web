import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject as RxSubject } from 'rxjs/Subject';
import { AppState, EnrollmentActions, LayoutActions, getEnrollmentStudent, getEnrollmentSelectedSubjects } from '../stores';
import { PageComponentBase, WizardComponent } from '../shared';
import { Student } from '../students';
import { Subject } from '../subjects';

import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';

@Component({
  templateUrl: 'enrollment-wizard.component.html'
})
export class EnrollmentWizardComponent extends PageComponentBase implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(WizardComponent) wizard: WizardComponent;

  student$: Observable<Student>;
  selectedSubjects$: Observable<Subject[]>;

  private ngUnsubscribe: RxSubject<void> = new RxSubject<void>();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private enrollmentActions: EnrollmentActions) {
    super(store, layoutActions, 'Enrollment Wizard');
  }

  ngOnInit(): void {
    this.student$ = this.store.select(getEnrollmentStudent);
    this.selectedSubjects$ = this.store.select(getEnrollmentSelectedSubjects);

    // Reset
    this.store.dispatch(this.enrollmentActions.setStudentToEnroll(null));
  }

  ngAfterViewInit(): void {
    this.student$
      .filter(subject => !!subject)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(student => {
        this.wizard.next();
      });

    this.store.dispatch(this.enrollmentActions.setStudentToEnroll(null));
  }

  ngOnDestroy(): void {
    // Proper way of unsubscribing
    // See SO post: https://stackoverflow.com/a/41177163
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  saveStudent(student: Student) {
    this.store.dispatch(this.enrollmentActions.setStudentToEnroll(student));
  }

  selectSubject(subject: Subject) {
    this.store.dispatch(this.enrollmentActions.selectSubject(subject));
  }

  removeSubject(subject: Subject) {
    this.store.dispatch(this.enrollmentActions.removeSubject(subject));
  }

  proceedToSummary() {
    this.wizard.next();
  }
}
