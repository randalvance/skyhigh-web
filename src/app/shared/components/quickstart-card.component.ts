import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-quickstart-card",
  templateUrl: "quickstart-card.component.html",
  styles: [`
    .content-body .content {
      height: 100px;
    }
  `],
  host: {
    "[class]": "'col-12 col-xl-4 col-lg-6'"
  }
})
export class QuickStartCardComponent implements OnInit {

  @Input() title: string;
  @Output() primaryButtonClicked: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onClick() {
    this.primaryButtonClicked.emit(null);
  }
}
