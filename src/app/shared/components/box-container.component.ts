import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-box",
  templateUrl: "box-container.component.html",
  styleUrls: [ "box-container.component.scss" ]
})
export class BoxContainerComponent {
  @Input() headerTitle: string;
  @Output() primaryButtonClicked: EventEmitter<any> = new EventEmitter();

  onPrimaryButtonClicked() {
    this.primaryButtonClicked.emit(null);
  }
}
