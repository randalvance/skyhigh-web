import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, StudentActions, LayoutActions } from '../stores';
import { PageComponentBase } from '../shared';
import { Student } from './student';
import { StudentsService } from './students.service';

@Component({
  templateUrl: 'student-edit.component.html'
})
export class StudentEditComponent extends PageComponentBase implements OnInit {

  student: Student = new Student();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private studentActions: StudentActions,
    private studentsService: StudentsService) {

    super(store, layoutActions, 'Add Student');
  }

  ngOnInit(): void {

  }

  saveStudent(student: Student) {
    this.studentsService.add(student).subscribe(resp => {
      alert('Done saving student');
    });
  }
}
