import { Component, OnInit } from '@angular/core';
import { User, Employees } from './_models/appTypes';
import { MenuItem } from 'primeng';


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
  items: MenuItem[];

  ngOnInit() {
    this.user = this.myEmployees[0];

    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'Two Column Components', 
                  icon: 'pi pi-fw pi-plus',
                  url: 'twocol'
              },
              {
                label: 'Pg Calendar', 
                icon: 'pi pi-fw pi-plus',
                url: 'pgcalendar'
              },
              {label: 'Quit'}
          ]
      }
  ];

  }

  onLogoutClick() {
    console.log('Logout clicked...');
  }

}
