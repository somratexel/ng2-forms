import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../app.user';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('Somrat', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
    })
  });

  onSubmit(){
    console.log(this.userForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
