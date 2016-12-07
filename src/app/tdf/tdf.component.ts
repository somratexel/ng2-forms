import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  onSubmit(value: any){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
