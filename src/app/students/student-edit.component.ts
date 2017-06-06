import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AppState, StudentActions, LayoutActions } from '../stores';
import { PageComponentBase } from '../shared';
import { Student } from './student';
import { StudentsService } from './students.service';

@Component({
  templateUrl: 'student-edit.component.html'
})
export class StudentEditComponent extends PageComponentBase implements OnInit, OnDestroy {

  student: Student = new Student();

  subscriptions: Subscription = new Subscription();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private studentActions: StudentActions,
    private studentsService: StudentsService,
    private router: Router) {

    super(store, layoutActions, 'Add Student');
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  saveStudent(student: Student) {
    this.subscriptions.add(
      this.studentsService.add(student).subscribe(resp => {
        this.router.navigateByUrl('/students');
      }));
  }
}
