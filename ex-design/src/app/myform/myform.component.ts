import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  
  professionForm = new FormGroup({
    profession: new FormControl(''),
    skills: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  updateProfession() {
    //this.profession.setValue('Angular Developer');
  }

  onSubmit() {
    
    console.warn(this.professionForm.value);
  }
}
