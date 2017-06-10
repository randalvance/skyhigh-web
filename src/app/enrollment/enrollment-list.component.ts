import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { AppState, LayoutActions } from '../stores';
import { PageComponentBase } from '../shared';

import { Enrollment } from '.';
import { EnrollmentService } from './enrollment.service';

import 'rxjs/add/operator/takeUntil';

@Component({
  templateUrl: 'enrollment-list.component.html'
})
export class EnrollmentListComponent extends PageComponentBase implements OnInit, OnDestroy {

  enrollments$: Observable<Enrollment[]>;

  private ngUnsubscribe: Subject<{}> = new Subject();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private enrollmentService: EnrollmentService) {
    super(store, layoutActions, 'Enrollments');
  }

  ngOnInit(): void {
    this.enrollments$ = this.enrollmentService.getAll();
  }

  ngOnDestroy(): void {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
  }
}
