import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student } from './student';

@Component({
  selector: 'app-student-edit',
  templateUrl: 'student-edit.component.html'
})
export class StudentEditComponent implements OnInit {

  private title: string = 'Add Student';
  private student: Student = new Student();

  constructor() {

  }

  ngOnInit(): void {
    // this.store.dispatch({
    //   type: PageMetadataActionTypes.pageTitleChanged,
    //   payload: 'Add Student'
    // });
  }

  saveStudent(student: Student) {
    // this.studentsService.add(student).subscribe(resp => {
    //   alert('Done saving student');
    // });
    alert('Not implemented');
  }
}
