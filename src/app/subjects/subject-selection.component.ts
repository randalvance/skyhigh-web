import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject as RxSubject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from './subject';
import { SubjectsService } from './subjects.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-subject-selection',
  templateUrl: 'subject-selection.component.html',
  styleUrls: ['subject-selection.component.scss']
})
export class SubjectSelectionComponent implements OnInit, OnDestroy {
  @Input() selectedSubjects: Subject[];
  @Output() subjectSelected: EventEmitter<Subject> = new EventEmitter<Subject>();
  @Output() subjectRemoved: EventEmitter<Subject> = new EventEmitter<Subject>();

  @ViewChild('availableSubjectsFilter') availableSubjectsFilter: ElementRef;
  @ViewChild('selectedSubjectsFilter') selectedSubjectsFilter: ElementRef;

  subjects$: Observable<Subject[]>;
  subjectsPoolSubject$: RxSubject<ISubjectSelectionAction>;

  subscriptions: Subscription = new Subscription();

  loading: boolean = true;

  constructor(private subjectsService: SubjectsService) {

  }

  ngOnInit(): void {
    this.setupObservablesForLoadingSubjects();

    this.subscriptions.add(
      Observable.fromEvent(this.availableSubjectsFilter.nativeElement, 'keyup')
      .debounceTime(1000)
      .subscribe((keyboardEvent: any) => {
        let searchKey = keyboardEvent.target.value;

        this.setupObservablesForLoadingSubjects(searchKey);
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setupObservablesForLoadingSubjects(searchKey?: string) {

    this.loading = true;
    
    let initialSubjects = this.subjectsService.getAll().map(subjects => {
      return subjects.filter(subject => this.selectedSubjects.map(x => x.subjectId).indexOf(subject.subjectId) === -1)
    });

    this.subjectsPoolSubject$ = new RxSubject<ISubjectSelectionAction>();

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

    this.subjects$.subscribe(subjects => {
      this.loading =false;
    });
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