import { Student } from '../students';
import { Subject } from '../subjects';

export interface Enrollment {
    student: Student,
    subjects: Subject[]
}