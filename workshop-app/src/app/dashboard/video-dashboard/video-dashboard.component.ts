import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Video} from '../..//types';
@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  
  videosList : Video[] ;
  selectedChildVideo : Video ;
  apiUrl : string = "http://api.angularbootcamp.com/videos";

  constructor(http: HttpClient) { 
    http
      .get<Video[]>(this.apiUrl)
      .subscribe(videos => (this.videosList = videos));
  }

  ngOnInit() {
    
  }

  onSelect(video: Video) {
    console.log('dashboard selected video is ', video);
    this.selectedChildVideo = video;
  }

}