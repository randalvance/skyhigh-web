import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ResourceServiceBase } from '../shared/services';
import { Student } from './student';
import { Observable, ObservableInput } from 'rxjs/Observable';

@Injectable()
export class StudentsService extends ResourceServiceBase<Student> {
  constructor(http: Http) {
    // TODO: Get this from environment variable
    // We might need to repackage this app in a node container instead of nginx
    // Note: This needs to be the url of how we will access it from the browser, otherwise you will get DNS errors
    super(http, 'http://localhost:8181/api/', 'students');
  }
}
