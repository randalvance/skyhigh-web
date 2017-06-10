import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject as RxSubject } from 'rxjs/Subject';
import { AppState, EnrollmentActions, LayoutActions, getEnrollmentStudent, getEnrollmentSelectedSubjects, getEnrollmentToSave } from '../stores';
import { PageComponentBase, WizardComponent } from '../shared';
import { Student } from '../students';
import { Subject } from '../subjects';
import { Enrollment } from '../enrollment';
import { EnrollmentService } from './enrollment.service';
import { StudentsService } from '../students/students.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';

@Component({
  templateUrl: 'enrollment-wizard.component.html'
})
export class EnrollmentWizardComponent extends PageComponentBase implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(WizardComponent) wizard: WizardComponent;

  student$: Observable<Student>;
  selectedSubjects$: Observable<Subject[]>;
  enrollment$: Observable<Enrollment>;

  private ngUnsubscribe: RxSubject<void> = new RxSubject<void>();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private enrollmentActions: EnrollmentActions,
    private enrollmentService: EnrollmentService,
    private studentsService: StudentsService,
    private router: Router) {
    super(store, layoutActions, 'Enrollment Wizard');
  }

  ngOnInit(): void {
    this.student$ = this.store.select(getEnrollmentStudent);
    this.selectedSubjects$ = this.store.select(getEnrollmentSelectedSubjects);
    this.enrollment$ = this.store.select(getEnrollmentToSave);

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

  completeEnrollment() {
    this.enrollment$
      .takeUntil(this.ngUnsubscribe)
      .subscribe(this.saveEnrollment.bind(this));
  }

  private saveEnrollment(enrollment: Enrollment) {
    this.studentsService.add(enrollment.student)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response: Response) => {
        var student = response.json();
        var enrollmentToSave = Object.assign({}, enrollment, { student: student });

        this.enrollmentService.add(enrollmentToSave)
          .takeUntil(this.ngUnsubscribe)
          .subscribe(enrollment => {
            alert('Enrollment was saved successfully');
            this.router.navigateByUrl('/enrollments');
          }, err => {
            alert('An error occured when saving the enrollment.');
          });
      });
  }
}
