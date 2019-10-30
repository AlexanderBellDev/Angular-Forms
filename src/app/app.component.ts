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

//  userModel = new User('Alex', 'Alex@alex.com', 4747, 'angular', 'morning', true);
  userModel = new User('Rob', 'rob@test.com', 5556665566, 'Vue', 'morning', true);

}
