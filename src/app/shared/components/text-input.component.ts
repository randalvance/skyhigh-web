import { Component, Input } from "@angular/core";
import { NgControl } from "@angular/forms";
import { ValueAccessorBase } from "../common";

@Component({
  selector: "app-text-input",
  templateUrl: "text-input.component.html"
})
export class TextInputComponent extends ValueAccessorBase<string>  {
  @Input() public label: string;
  @Input() public placeholder: string;

  public identifier = `form-text-${identifier++}`;

  constructor(ngControl: NgControl) {
      super(ngControl);
  }
}

let identifier = 0;
