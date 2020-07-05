import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmpltform',
  templateUrl: './tmpltform.component.html',
  styleUrls: ['./tmpltform.component.css']
})
export class TmpltformComponent implements OnInit {
  startYear:number | undefined ;
  endYear:number ;
  currentYear:Date;

  
  constructor() {
  }

  ngOnInit() {
    this.currentYear=new Date();
    this.startYear = this.currentYear.getFullYear();
    this.endYear = this.startYear + 2;
  }

  

  onYrChange() {
    console.log("Year value is:", this.startYear);
  }

}
