import { Component, OnInit, Input } from '@angular/core';
import {Video} from '../..//types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent  {
  @Input()videos: Video[];
  selectedVideo : Video  | null;

  showJSON :  boolean = false;
  constructor() {
    //this.selectedVideo = this.videos[0];
   }


  selectVideo(video: Video){
    console.log('selected video ' , video);
    if(video === this.selectedVideo) {
      this.selectedVideo = null;
    }else {
      this.selectedVideo = video;
    }
   
  }

  selectedClass(video: Video) {
    if(video === this.selectedVideo)
      return 'selected-video';
    else 
      return 'unselected-video';
  }

}

