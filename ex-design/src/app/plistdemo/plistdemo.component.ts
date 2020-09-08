import { Component, OnInit } from '@angular/core';
import { Employees } from '../_models/appTypes';
import { User } from '../_models/appTypes';

@Component({
  selector: 'app-plistdemo',
  templateUrl: './plistdemo.component.html',
  styleUrls: ['./plistdemo.component.css']
})
export class PlistdemoComponent implements OnInit {
  srcEmployees:User[] = Employees;
  tgtEmployees:User[];
  constructor() { }

  ngOnInit() {
    this.tgtEmployees = [];
  }

}

