import { Component, OnInit, Pipe  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../app.user';

@Component({
  selector: 'app-fbf',
  templateUrl: './fbf.component.html',
  styleUrls: ['./fbf.component.css']
})
export class FbfComponent implements OnInit {
  user = new User('','',{});
  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}
  jsonView(data){
    console.log(data)
  }
  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.userForm = this._formBuilder.group({
      name:[this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address:this._formBuilder.group({
        street: [],
        city: [],
        postalcode: [null,[Validators.pattern('^[1-9][0-9]{4}$')]]
      })
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    //this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

  onValueChanged(data?: any) {
    //console.log('here i am',data)
    if (!this.userForm) { return; }
    const form = this.userForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'power': ''
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 10 characters long.'
    },
    'postalcode': {
      'pattern': 'Postcode has five digit.'
    }
  };

}
