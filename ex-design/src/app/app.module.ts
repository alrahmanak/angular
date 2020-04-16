import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {CalendarModule} from 'primeng/calendar';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
//import { CalendarModule } from 'primeng/calendar/calendar';


import { AppComponent } from './app.component';
import { TwoColumnsComponent } from './two-columns/two-columns.component';
import { PgcalendarComponent } from './pgcalendar/pgcalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoColumnsComponent,
    PgcalendarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
