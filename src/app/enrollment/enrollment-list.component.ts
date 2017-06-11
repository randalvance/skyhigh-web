import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { AppState, LayoutActions } from '../stores';
import { PageComponentBase } from '../shared';

import { Enrollment } from '.';
import { EnrollmentService } from './enrollment.service';

import { animate, trigger, transition, state, style } from '@angular/animations';

import 'rxjs/add/operator/takeUntil';

@Component({
  templateUrl: 'enrollment-list.component.html',
  styleUrls: ['enrollment-list.component.scss'],
  animations: [
    trigger('subjectRowAnimate', [
      transition(':enter', [
        style({
          transform: 'translateY(-100px)',
          opacity: 0
        }),
        animate('300ms', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          transform: 'translateY(0)',
          opacity: 1
        }),
        animate('300ms', style({
          transform: 'translateY(-100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class EnrollmentListComponent extends PageComponentBase implements OnInit, OnDestroy {

  enrollments$: Observable<Enrollment[]>;

  private ngUnsubscribe: Subject<{}> = new Subject();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private enrollmentService: EnrollmentService) {
    super(store, layoutActions, 'Enrollments');
  }

  ngOnInit(): void {
    this.enrollments$ = this.enrollmentService.getAll().map(enrollments => enrollments.map((enrollment: any) => {

      enrollment.subjectsShown = false;

      return <Enrollment>enrollment;
    }));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleSubjects(enrollment: any) {
    enrollment.subjectsShown = !enrollment.subjectsShown;
  }
}
