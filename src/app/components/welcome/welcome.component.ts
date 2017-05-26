import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  firstName: string = 'Foo';
  lastName: string = 'Bar';
  title: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  enrollNewStudent() {
  }

  enrollExistingStudent() {
    alert('Not yet implemented!');
  }
}
