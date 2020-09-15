import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// primeNg components
import {CalendarModule} from 'primeng/calendar';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {PickListModule} from 'primeng/picklist';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';



import { AppComponent } from './app.component';
import { TwoColumnsComponent } from './two-columns/two-columns.component';
import { PgcalendarComponent } from './pgcalendar/pgcalendar.component';
import { PipestestComponent } from './pipestest/pipestest.component';
import { MyformComponent } from './myform/myform.component';
import { TmpltformComponent } from './tmpltform/tmpltform.component';
import { PlistdemoComponent } from './plistdemo/plistdemo.component';
import { FbFormComponent } from './fb-form/fb-form.component';
import { HttpExampleComponent } from './http-example/http-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoColumnsComponent,
    PgcalendarComponent,
    PipestestComponent,
    MyformComponent,
    TmpltformComponent,
    PlistdemoComponent,
    FbFormComponent,
    HttpExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenubarModule,
    AppRoutingModule,
    InputTextModule,
    CalendarModule,
    PickListModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
