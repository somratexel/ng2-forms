import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../app.user';

@Component({
  selector: 'app-fbf1',
  templateUrl: './fbf1.component.html',
  styleUrls: ['./fbf1.component.css']
})
export class Fbf1Component implements OnInit {
  user = new User('','',{});
  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(){
    this.userForm = this._formBuilder.group({
      name:[this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address:this._formBuilder.group({
        street: [],
        city: [],
        postalcode: [null,[Validators.pattern('^[1-9][0-9]{4}$')]]
      })
    })
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}

