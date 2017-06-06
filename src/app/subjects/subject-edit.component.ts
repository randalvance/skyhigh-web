import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AppState, SubjectActions, LayoutActions } from '../stores';
import { PageComponentBase } from '../shared';
import { Subject } from './subject';
import { SubjectsService } from './subjects.service';

@Component({
  templateUrl: 'subject-edit.component.html'
})
export class SubjectEditComponent extends PageComponentBase implements OnInit {

  subject: Subject = new Subject();
  form: FormGroup;

  subscription: Subscription = new Subscription();

  constructor(store: Store<AppState>, layoutActions: LayoutActions,
    private formBuilder: FormBuilder,
    private subjectActions: SubjectActions,
    private subjectsService: SubjectsService,
    private router: Router) {

    super(store, layoutActions, 'Add Subject');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'description': ['', [Validators.required]]
    });
  }

  saveSubject() {
    this.subscription.add(
      this.subjectsService.add(this.form.value).subscribe(() => {
        this.router.navigateByUrl('/subjects');
      })
    );
  }
}
