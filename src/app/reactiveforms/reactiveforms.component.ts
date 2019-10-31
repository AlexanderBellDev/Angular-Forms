import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  regForm = new FormGroup({
    username: new FormControl('Alex'),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
