import { Component } from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  title = 'angularforms';

 userModel = new User('', 'angular', 4555, '');

}
