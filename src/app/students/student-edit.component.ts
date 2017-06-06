import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private studentsService: StudentsService,
    private router: Router) {

    super(store, layoutActions, 'Add Student');
  }

  ngOnInit(): void {

  }

  saveStudent(student: Student) {
    this.studentsService.add(student).subscribe(resp => {
      this.router.navigateByUrl('/students');
    });
  }
}
