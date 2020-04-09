import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GanttComponent } from './gantt/gantt.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [

  { path: 'info', component: InfoComponent },
  { path: 'gotogantt', component: GanttComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
