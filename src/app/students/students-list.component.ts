import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ChildComponentMetadata } from '../shared/models';

import { Student } from '.';
import { StudentsService } from './students.service';

@Component({
  templateUrl: 'students-list.component.html'
})
export class StudentsListComponent implements OnInit {

  students$: Observable<Student[]>;

  constructor(private studentsService: StudentsService) {

  }

  ngOnInit(): void {
    this.students$ = this.studentsService.getAll();
  }

}
