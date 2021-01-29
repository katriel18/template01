import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
//themes
  "primeng/resources/themes/saga-green/theme.css",
  "primeng/resources/themes/vela-green/theme.css",
*/