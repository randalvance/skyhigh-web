import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from './subject';

@Pipe({
    name: 'subjectFilter',
    pure: false
})
export class SubjectFilterPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        let searchTerm = args[0].toLowerCase();
        let subjects = <Subject[]>value;

        return subjects.filter(subject => subject.name.toLowerCase().indexOf(searchTerm) > -1);
    }
}