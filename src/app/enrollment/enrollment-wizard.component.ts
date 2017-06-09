import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AppState, EnrollmentActions, LayoutActions, getEnrollmentStudent, getEnrollmentSelectedSubjects } from '../stores';
import { PageComponentBase, WizardComponent } from '../shared';
import { Student } from '../students';
import { Subject } from '../subjects';

@Component({
  templateUrl: 'enrollment-wizard.component.html'
})
export class EnrollmentWizardComponent extends PageComponentBase implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(WizardComponent) wizard: WizardComponent;

  subscriptions: Subscription = new Subscription();

  student$: Observable<Student>;
  selectedSubjects$: Observable<Subject[]>;

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
    this.subscriptions.add(this.student$.subscribe(student => {
      if (student) {
        this.wizard.next();
      }
    }));

    //this.store.dispatch(this.enrollmentActions.setStudentToEnroll(null));

    this.store.dispatch(this.enrollmentActions.setStudentToEnroll({
      studentId: 0,
      firstName: 'Dummy',
      lastName: 'Demo'
    }));
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
}
