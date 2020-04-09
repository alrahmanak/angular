import { Component, OnInit } from '@angular/core';
import { Employees } from '../_models/appTypes';
@Component({
  selector: 'app-two-columns',
  templateUrl: './two-columns.component.html',
  styleUrls: ['./two-columns.component.css']
})
export class TwoColumnsComponent implements OnInit {
  myEmployees = Employees;
  constructor() { }

  ngOnInit() {
    
  }

}
