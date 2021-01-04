import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveComponentModule} from '@ngrx/component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveComponentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
