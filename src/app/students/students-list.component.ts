import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ChildComponentMetadata } from "../shared/models";

import { Student } from "./student";

@Component({
  templateUrl: "students-list.component.html"
})
export class StudentsListComponent implements OnInit {

  students: Observable<Student[]>;
  title: string = "";

  constructor() {

  }

  ngOnInit(): void {

  }

}
