import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StartFiltersComponent } from './start-filters/start-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { VideoItemComponent } from './video-item/video-item.component';

const routes :Routes  = [
  {path : '', component : VideoDashboardComponent}
]

/*
,
  {path: '', component : VideoListComponent},
  {path: '', component : VideoPlayerComponent},
  {path: '', component: StartFiltersComponent}
*/

@NgModule({
  declarations: [
    VideoDashboardComponent,
    VideoListComponent, 
    VideoPlayerComponent, 
    StartFiltersComponent, VideoItemComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
