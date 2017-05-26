import { Component, OnInit, OnDestroy } from '@angular/core';
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

  studentsGetAllSubscription: Subscription;

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private studentActions: StudentActions,
    private studentsService: StudentsService) {
    super(store, layoutActions, 'STUDENTS');
  }

  ngOnInit(): void {
    this.studentsGetAllSubscription = this.studentsService.getAll().subscribe(students => {
      this.store.dispatch(this.studentActions.replaceStudents(students));
    });

    this.students$ = this.store.select(getStudents);
  }

  ngOnDestroy(): void {
    this.studentsGetAllSubscription.unsubscribe();
  }

}
