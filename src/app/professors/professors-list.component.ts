import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ChildComponentMetadata } from '../shared/models';
import { PageComponentBase } from '../shared/components';
import { AppState, LayoutActions } from '../stores';

import { Professor } from './professor';
import { ProfessorsService } from './professors.service';

@Component({
  templateUrl: 'professors-list.component.html'
})
export class ProfessorsListComponent extends PageComponentBase implements OnInit {

  professors$: Observable<Professor[]>;

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private professorsService: ProfessorsService) {
    super(store, layoutActions, 'Professors');
  }

  ngOnInit(): void {
    this.professors$ = this.professorsService.getProfessors();
  }

}
