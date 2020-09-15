import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
  results:Object[];
  errorMessage:string;

  constructor(private _apiService:ApiService) { 

  }

  ngOnInit() {
    
    this._apiService.getFunnyWords()
      .subscribe(
        res => {
          this.results = res;
        }
      ),
      error => this.errorMessage = <any>error;
  }



}
