import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from './subject';
import { SubjectsService } from './subjects.service';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-subject-selection',
  templateUrl: 'subject-selection.component.html',
  styleUrls: [ 'subject-selection.component.scss' ]
})
export class SubjectSelectionComponent implements OnInit, OnDestroy {
  @Input() selectedSubjects: Subject[];
  @Output() subjectSelected: EventEmitter<Subject> = new EventEmitter<Subject>();

  subjects$: Observable<Subject[]>;

  constructor(private subjectsService: SubjectsService) {

  }

  ngOnInit(): void {
    this.subjects$ = this.subjectsService.getAll();
  }

  ngOnDestroy(): void {

  }

  selectSubject(subject: Subject): void {
    this.subjectSelected.emit(subject);
  }
}
