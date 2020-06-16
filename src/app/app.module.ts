import { BrowserModule } from '@angular/platform-browser';   
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EbgComponent } from './components/ebg/ebg.component';
import { EbgheaderComponent } from './components/ebgheader/ebgheader.component';
import { EbgfooterComponent } from './components/ebgfooter/ebgfooter.component'

@NgModule({
  declarations: [
    AppComponent,
    EbgComponent,
    EbgheaderComponent,
    EbgfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
