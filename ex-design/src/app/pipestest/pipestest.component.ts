import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipestest',
  templateUrl: './pipestest.component.html',
  styleUrls: ['./pipestest.component.css']
})
export class PipestestComponent implements OnInit {

  todayAsInAngular: number = Date.now();
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  constructor() { }

  ngOnInit() {
  }

}
