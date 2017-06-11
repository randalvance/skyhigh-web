import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ResourceServiceBase } from '../shared/services';
import { Student } from './student';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class StudentsService extends ResourceServiceBase<Student> {
  constructor(http: Http) {
    super(http, environment.studentsServiceUrl, 'students');
  }
}
