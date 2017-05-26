import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, SubjectActions, LayoutActions } from '../stores';
import { PageComponentBase } from '../shared';
import { Subject } from './subject';

@Component({
  templateUrl: 'subject-edit.component.html'
})
export class SubjectEditComponent extends PageComponentBase implements OnInit {

  subject: Subject = new Subject();
  form: FormGroup;


  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private formBuilder: FormBuilder,
    private subjectActions: SubjectActions) {

    super(store, layoutActions, 'Add Subject');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'description': ['', [Validators.required]]
    });
  }

  onSave() {
    alert('Not implemented');
  }
}
