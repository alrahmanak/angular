import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoColumnsComponent } from './two-columns/two-columns.component';
import { PgcalendarComponent } from './pgcalendar/pgcalendar.component';
import { PipestestComponent } from './pipestest/pipestest.component';
import { MyformComponent } from './myform/myform.component';
import { TmpltformComponent } from './tmpltform/tmpltform.component';
import { PlistdemoComponent } from './plistdemo/plistdemo.component';
import { FbFormComponent } from './fb-form/fb-form.component';
import { HttpExampleComponent } from './http-example/http-example.component';


const routes: Routes = [
  { path: 'twocol', component: TwoColumnsComponent },
  { path: 'pgcalendar', component: PgcalendarComponent },
  { path: 'pipestesturl', component: PipestestComponent },
  { path: 'httpex', component: HttpExampleComponent},
  { path: 'myform', component: MyformComponent },
  { path: 'fbform', component: FbFormComponent },
  { path: 'tform', component: TmpltformComponent },
  { path: 'plist', component: PlistdemoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
