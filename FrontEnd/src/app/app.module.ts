import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagrindinisComponent } from './puslapiai/pagrindinis/pagrindinis.component';
import { ApieComponent } from './puslapiai/apie/apie.component';
import { MeniuComponent } from './meniu/meniu.component';

@NgModule({
  declarations: [
    AppComponent,
    PagrindinisComponent,
    ApieComponent,
    MeniuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
