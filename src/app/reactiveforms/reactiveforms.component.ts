import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  public regForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      postalCode: new FormControl('')
    })
  });
  constructor() { }

  ngOnInit() {
  }

  loadApiData() {
this.regForm.patchValue({
  password: 'test',
  confirmPassword: 'test',
  address : {
    city : 'city',
    postalCode: '123456'
  }
});
  }
}
