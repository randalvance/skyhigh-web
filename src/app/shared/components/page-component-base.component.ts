import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, LayoutActions } from '../../stores';

export abstract class PageComponentBase implements OnInit {
  constructor(protected store: Store<AppState>, protected layoutActions: LayoutActions, private title: string) {
    this.store.dispatch(this.layoutActions.changeTitle(title));
  }

  ngOnInit() {
  }
}
