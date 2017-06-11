import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  firstName: string = 'Foo';
  lastName: string = 'Bar';
  title: string = '';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  enrollNewStudent() {
    this.router.navigateByUrl('/enrollment');
  }

  enrollExistingStudent() {
    alert('Not yet implemented!');
  }
}
