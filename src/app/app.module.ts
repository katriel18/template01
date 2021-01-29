import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';

import { RootComponent } from './root/root.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    MainComponent
    
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


