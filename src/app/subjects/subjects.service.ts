import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { ResourceServiceBase } from '../shared/services';
import { Subject } from './subject';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class SubjectsService extends ResourceServiceBase<Subject> {
  constructor(http: Http) {
    super(http, environment.subjectsServiceUrl, 'subjects');
  }
}
