import { ControlValueAccessor, NgControl } from "@angular/forms";

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {
  private innerValue: T;

  private changed = new Array<(value: T) => void>();
  private touched = new Array<() =>void>();


  constructor(protected ngControl: NgControl) {
      ngControl.valueAccessor = this;
  }

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }

  touch() {
    this.touched.forEach(f => f());
  }

  writeValue(value: T): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: T) => void): void {
    this.changed.push(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.touched.push(fn);
  }

  setDisabledState(isDisabled: boolean): void {

  }
}
