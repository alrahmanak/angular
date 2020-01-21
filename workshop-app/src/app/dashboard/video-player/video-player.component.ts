import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() passVideo : Video;

  constructor() { }

  ngOnInit() {
  }

}
