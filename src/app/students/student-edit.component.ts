import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, EnrollmentActions, LayoutActions } from '../stores';
import { PageComponentBase } from '../shared';
import { Student } from './student';

@Component({
  templateUrl: 'student-edit.component.html'
})
export class StudentEditComponent extends PageComponentBase implements OnInit {

  student: Student = new Student();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private enrollmentActions: EnrollmentActions) {

    super(store, layoutActions, 'Add Student');
  }

  ngOnInit(): void {

  }

  saveStudent(student: Student) {
    // this.studentsService.add(student).subscribe(resp => {
    //   alert('Done saving student');
    // });
    alert('Not implemented');
  }
}
