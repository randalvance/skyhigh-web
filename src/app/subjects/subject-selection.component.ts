import { Component, AfterViewInit, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject as RxSubject } from 'rxjs/Subject';
import { Subject } from './subject';
import { SubjectsService } from './subjects.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/takeUntil';
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
  @Output() selectedSubjectsFiltered: EventEmitter<string> = new EventEmitter<string>();
  @Output() nextClicked: EventEmitter<{}> = new EventEmitter();

  @ViewChild('availableSubjectsFilter') availableSubjectsFilter: ElementRef;

  selectedSubjectsFilter: string = '';

  subjects$: Observable<Subject[]>;
  subjectsPoolSubject$: RxSubject<ISubjectSelectionAction>;

  loading: boolean = true;

  private ngUnsubscribe: RxSubject<void> = new RxSubject<void>();

  constructor(private subjectsService: SubjectsService) {

  }

  ngOnInit(): void {
    this.setupObservablesForLoadingSubjects();

    Observable.fromEvent(this.availableSubjectsFilter.nativeElement, 'keyup')
      .debounceTime(1000)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((keyboardEvent: any) => {
        let searchKey = keyboardEvent.target.value;

        this.setupObservablesForLoadingSubjects(searchKey);
      });
  }

  ngOnDestroy(): void {
    // Proper way of unsubscribing
    // See SO post: https://stackoverflow.com/a/41177163
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  setupObservablesForLoadingSubjects(searchTerm?: string) {
    this.loading = true;

    let initialSubjects = this.subjectsService.getAll({ searchTerm: searchTerm }).map(subjects => {
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
    }).do(() => {
      this.loading = false;
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

  filterSelectedSubjects(filter: string) {
    this.selectedSubjectsFiltered.emit(filter);
  }

  clickNext() {
    this.nextClicked.emit();
  }
}

interface ISubjectSelectionAction {
  id?: number,
  payload?: Subject,
  operation: 'add' | 'delete';
};