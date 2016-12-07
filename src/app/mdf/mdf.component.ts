import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../app.user';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('somrat'),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl()
    })
  });

  onSubmit(){
    console.log(this.userForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
