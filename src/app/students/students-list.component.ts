import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { ChildComponentMetadata } from '../shared/models';
import { AppState, StudentActions, getStudents } from '../stores';

import { Student } from '.';
import { StudentsService } from './students.service';

@Component({
  templateUrl: 'students-list.component.html'
})
export class StudentsListComponent implements OnInit, OnDestroy {

  students$: Observable<Student[]>;

  studentsGetAllSubscription: Subscription;

  constructor(
    private store : Store<AppState>,
    private studentActions: StudentActions,
    private studentsService: StudentsService) {

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
