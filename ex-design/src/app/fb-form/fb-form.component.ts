import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fb-form',
  templateUrl: './fb-form.component.html',
  styleUrls: ['./fb-form.component.css']
})
export class FbFormComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    dob: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    
    let month = this.profileForm.value.dob.getMonth();
    let year = this.profileForm.value.dob.getFullYear();
    /**/
    console.info("dob value is:", this.profileForm.value.dob)
    console.info(" day value is:", this.profileForm.value.dob.getDate());
    console.info('mont value is ', month, ' year value is:', year);
  }

}
