import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundaments',
  templateUrl: './fundaments.component.html',
  styleUrls: ['./fundaments.component.scss'],
})
export class FundamentsComponent implements OnInit {


  ngOnInit() {}

  
  name: string;
  last:string;
  yOld:number;

  students: Estudent[] = [];

  constructor() {
    this.students=[];
    //this.CreateStudent();
   }

  CreateStudent() {
    this.students.push({
      name: this.name,
      last: this.last,
      yOld: this.yOld
    });
  }

}

interface Estudent {
  name: string,
  last: string;
  yOld: number
}
