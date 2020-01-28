import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import {HttpClientModule} from '@angular/common/http'

 
@NgModule({
  declarations: [
    AppComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
