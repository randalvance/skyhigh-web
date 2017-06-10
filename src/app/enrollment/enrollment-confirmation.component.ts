import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../students';
import { Subject } from '../subjects';

@Component({
    selector: 'app-enrollment-confirmation',
    templateUrl: 'enrollment-confirmation.component.html',
    styleUrls: [ 'enrollment-confirmation.component.scss' ]
})
export class EnrollmentConfirmationComponent implements OnInit, OnDestroy {
    @Input() student: Student;
    @Input() selectedSubjects : Subject[];
    @Output() enrollmentCompleted: EventEmitter<{}> = new EventEmitter(); 
    
    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
    
    }

    completeEnrollment() {
        this.enrollmentCompleted.emit();
    }
}