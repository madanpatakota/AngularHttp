import { NgModule } from '@angular/core';
import { BrowserModule , } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { myHttpInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ { provide : HTTP_INTERCEPTORS , useClass : myHttpInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
