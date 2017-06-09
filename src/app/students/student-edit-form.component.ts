import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from './student';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: 'student-edit-form.component.html',
  styleUrls: [ 'student-edit-form.component.scss' ]
})
export class StudentEditFormComponent implements OnInit {
  @Input() saveButtonText: string;
  @Output() save = new EventEmitter<Student>();

  student: Student = new Student();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
    });
  }

  onSave() : boolean {
    this.student = Object.assign({}, this.student, this.form.value);
    this.save.emit(this.student);
    return false;
  }
}
