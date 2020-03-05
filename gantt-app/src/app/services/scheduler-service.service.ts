import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchedulerServiceService {

  constructor() { }

  
  getScenarioActivities(scenraio:string):Observable<any[]> {

    return from<any[]>(['']);

  }
}
