import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/appTypes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
  getUser(): Observable<User[]> {
    console.log('getUser '+this.baseURL + 'user')
    return this.http.get<User[]>(this.baseURL + 'user')
  }
 
  addUser(user:User): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(this.baseURL + 'user', body,{'headers':headers})
  }
 
}
 