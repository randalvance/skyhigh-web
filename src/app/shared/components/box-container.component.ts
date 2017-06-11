import { Component, Input, Output, EventEmitter } from "@angular/core";
import { slideFromBottomAnimation } from '../../animations';

@Component({
  moduleId: module.id,
  selector: "app-box",
  templateUrl: "box-container.component.html",
  styleUrls: ["box-container.component.scss"],
  animations: [slideFromBottomAnimation]
})
export class BoxContainerComponent {
  @Input() headerTitle: string;
  @Input() animationState: string;
  @Output() primaryButtonClicked: EventEmitter<any> = new EventEmitter();

  onPrimaryButtonClicked() {
    this.primaryButtonClicked.emit(null);
  }
}
