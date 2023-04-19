import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConEnergComponent } from './con-energ/con-energ.component';

@NgModule({
  declarations: [
    AppComponent,
    ConEnergComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
