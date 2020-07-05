import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoColumnsComponent } from './two-columns/two-columns.component';
import { PgcalendarComponent } from './pgcalendar/pgcalendar.component';
import { PipestestComponent } from './pipestest/pipestest.component';
import { MyformComponent } from './myform/myform.component';
import { TmpltformComponent } from './tmpltform/tmpltform.component';


const routes: Routes = [
  { path: 'twocol', component: TwoColumnsComponent },
  { path: 'pgcalendar', component: PgcalendarComponent },
  { path: 'pipestesturl', component: PipestestComponent },
  { path: 'myform', component: MyformComponent },
  { path: 'tform', component: TmpltformComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
