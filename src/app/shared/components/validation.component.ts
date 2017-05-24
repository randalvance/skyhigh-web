import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-validation",
  templateUrl: "validation.component.html"
})
export class ValidationComponent implements OnChanges {

  @Input() fieldName: string;
  @Input() errors: any;

  messages: string[];

  ngOnChanges(changes: any): void {
    if (changes.errors) {
      this.messages = Object.keys(changes.errors.currentValue).map(k => {
        switch (k) {
          case "required":
            return `${this.fieldName} is required!`;
        }
      });
    }
  }
}
