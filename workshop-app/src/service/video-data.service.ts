import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from 'src/app/types';
import { Observable } from 'rxjs/internal/Observable';

const apiUrl = 'https://api.angularbootcamp.com/videos'

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) { }

  
  loadVideos(): Observable<Video[]> {
    console.log('Using video data service');
    return this.http.get<Video[]>(apiUrl);
  }
}
