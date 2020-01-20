import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/types';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent  {

  @Input() video : Video | undefined;
 
  constructor() { }
}
