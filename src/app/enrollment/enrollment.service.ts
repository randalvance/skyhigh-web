import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ResourceServiceBase } from '../shared/services';
import { Enrollment } from '.';
import { environment } from '../../environments/environment';

@Injectable()
export class EnrollmentService extends ResourceServiceBase<Enrollment> {
  constructor(http: Http) {
    super(http, environment.enrollmentsServiceUrl, 'enrollments');
  }
}
