import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Video} from '../..//types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  selectedVideo: Video;
  @Output() outputVideo = new EventEmitter<Video>();
  showJSON :  boolean = false;
 
  constructor() {
    //this.selectedVideo = null;
   }

   ngOnInit() {
    this.selectedVideo = null;
  }



  selectVideo(video: Video){
    console.log('videoList Compoment ... selected video ' , video);
    if(video === this.selectedVideo) {
      this.selectedVideo = null;
    }else {
      this.selectedVideo = video;
      this.outputVideo.emit(this.selectedVideo);
    }
   
  }

  selectedClass(video: Video) {
    if(video === this.selectedVideo)
      return 'selected-video';
    else 
      return 'unselected-video';
  }

}

