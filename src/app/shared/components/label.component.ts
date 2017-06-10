import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-label',
    template: 
    `
        <div class="form-group">
            <label>{{label}}</label>
            <span>{{text}}</span>
        </div>
    `,
    styles: [
        `
            label {
                font-weight: bold;
            }
        `
    ]
})
export class LabelComponent {
    @Input() label: string;
    @Input() text: string;
}