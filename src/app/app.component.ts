import { Component } from '@angular/core';
import {User} from './model/user';
import {EnrollmentService} from "./service/enrollment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  title = 'angularforms';

  constructor(public enrollmentService: EnrollmentService) {
  }

  userModel = new User('', 'angular', 4555, '');

  onSubmit() {
    this.enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('success!', data),
      error => console.log('error!', error)

    );
  }
}
