import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from './student';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: 'student-edit-form.component.html'
})
export class StudentEditFormComponent implements OnInit {

  @Output() save = new EventEmitter<Student>();

  private student: Student = new Student();
  private studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
    });
  }

  onSave() {
    this.student = Object.assign({}, this.student, this.studentForm.value);
    this.save.emit(this.student);
    return false;
  }
}
