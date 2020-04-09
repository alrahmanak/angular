import { Component, OnInit } from '@angular/core';
import { User, Employees } from './_models/appTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ex-design';
  isNav:boolean = true;
  authenticated:boolean = true;
  alertFlag1:boolean = true;
  user:User ;
  myEmployees = Employees;

  ngOnInit() {
    this.user = this.myEmployees[0];
  }

  onLogoutClick() {
    console.log('Logout clicked...');
  }

}
