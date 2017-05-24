import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ResourceServiceBase } from "../shared/services";
import { Student } from "./student";

@Injectable()
export class StudentsService extends ResourceServiceBase<Student> {
  constructor(http: Http) {
    super(http, "students");
  }
}
