import { Component, OnInit } from '@angular/core';
import { User } from '../app.user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  user = new User('','',{});
  onSubmit(value: any){
    console.log(value);
    console.log(this.user);
  }

  constructor() { }

  ngOnInit() {
  }

}
