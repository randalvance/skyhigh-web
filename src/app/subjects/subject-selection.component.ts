import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject as RxSubject } from 'rxjs/Subject';
import { Subject } from './subject';
import { SubjectsService } from './subjects.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-subject-selection',
  templateUrl: 'subject-selection.component.html',
  styleUrls: ['subject-selection.component.scss']
})
export class SubjectSelectionComponent implements OnInit, OnDestroy {
  @Input() selectedSubjects: Subject[];
  @Output() subjectSelected: EventEmitter<Subject> = new EventEmitter<Subject>();
  @Output() subjectRemoved: EventEmitter<Subject> = new EventEmitter<Subject>();

  subjects$: Observable<Subject[]>;

  subjectsPoolSubject$ = new RxSubject<ISubjectSelectionAction>();

  constructor(private subjectsService: SubjectsService) {

  }

  ngOnInit(): void {
    let initialSubjects = this.subjectsService.getAll().map(subjects => {
      return subjects.filter(subject => this.selectedSubjects.map(x => x.subjectId).indexOf(subject.subjectId) === -1)
    });

    this.subjects$ = initialSubjects.merge(this.subjectsPoolSubject$).scan((acc, val) => {
      let action = <ISubjectSelectionAction>val;
      let subjects = <Subject[]>acc;

      if (action.operation === 'delete' && action.id) {
        let index = subjects.findIndex(x => x.subjectId === action.id);
        subjects.splice(index, 1);
      } else if (action.operation === 'add' && action.payload) {
        subjects.push(action.payload);
      }

      return subjects;
    });
  }

  ngOnDestroy(): void {

  }

  selectSubject(subject: Subject): void {
    this.subjectSelected.emit(subject);
    this.subjectsPoolSubject$.next({ id: subject.subjectId, operation: 'delete' });
  }

  removeSubject(subject: Subject): void {
    this.subjectRemoved.emit(subject);
    this.subjectsPoolSubject$.next({ payload: subject, operation: 'add' });
  }
}

interface ISubjectSelectionAction {
  id?: number,
  payload?: Subject,
  operation: 'add' | 'delete';
};