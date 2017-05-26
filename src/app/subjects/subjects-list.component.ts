import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { ChildComponentMetadata } from '../shared/models';
import { AppState, LayoutActions, SubjectActions, getSubjects } from '../stores';
import { PageComponentBase } from '../shared';

import { Subject } from '.';
import { SubjectsService } from './subjects.service';

@Component({
  templateUrl: 'subjects-list.component.html'
})
export class SubjectsListComponent extends PageComponentBase implements OnInit, OnDestroy {

  subjects$: Observable<Subject[]>;

  private subscriptions: Subscription = new Subscription();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private subjectActions: SubjectActions,
    private subjectsService: SubjectsService) {
    super(store, layoutActions, 'Subjects');
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.subjectsService.getAll().subscribe(subjects => {
        this.store.dispatch(this.subjectActions.addSubject(subjects[0])); // TODO: we'll fix this later
      })
    );

    this.subjects$ = this.store.select(getSubjects);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
