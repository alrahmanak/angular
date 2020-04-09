import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoColumnsComponent } from './two-columns/two-columns.component';


const routes: Routes = [
  { path: 'twocol', component: TwoColumnsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
