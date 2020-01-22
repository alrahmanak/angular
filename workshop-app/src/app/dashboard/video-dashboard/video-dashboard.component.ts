import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Video} from '../..//types';
import {VideoDataService} from '../../../service/video-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  
  videosList : Observable<Video[]> ;

  selectedChildVideo : Video ;

  constructor(svc : VideoDataService) { 
    this.videosList = svc.loadVideos();
      //.subscribe(videos => this.videosList = videos);
  }

  ngOnInit() {
    
  }

  onSelect(video: Video) {
    console.log('dashboard selected video is ', video);
    this.selectedChildVideo = video;
  }

}