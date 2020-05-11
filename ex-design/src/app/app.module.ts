import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {CalendarModule} from 'primeng/calendar';
import {MenubarModule} from 'primeng/menubar';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';



import { AppComponent } from './app.component';
import { TwoColumnsComponent } from './two-columns/two-columns.component';
import { PgcalendarComponent } from './pgcalendar/pgcalendar.component';
import { PipestestComponent } from './pipestest/pipestest.component';
import { MyformComponent } from './myform/myform.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoColumnsComponent,
    PgcalendarComponent,
    PipestestComponent,
    MyformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    AppRoutingModule,
    CalendarModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
