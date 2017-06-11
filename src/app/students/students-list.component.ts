import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { ChildComponentMetadata } from '../shared/models';
import { AppState, LayoutActions, StudentActions, getStudents } from '../stores';
import { PageComponentBase } from '../shared';

import { Student } from '.';
import { StudentsService } from './students.service';

@Component({
  templateUrl: 'students-list.component.html'
})
export class StudentsListComponent extends PageComponentBase implements OnInit, OnDestroy {

  students$: Observable<Student[]>;

  subscriptions: Subscription = new Subscription();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private studentActions: StudentActions,
    private studentsService: StudentsService) {
    super(store, layoutActions, 'Students');
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.subscriptions.add(this.studentsService.getAll().subscribe(students => {
      this.store.dispatch(this.studentActions.replaceStudents(students));
    }));

    this.students$ = this.store.select(getStudents);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
