import { NgModule } from '@angular/core';
import { BrowserModule , } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { myHttpInterceptor } from './http.interceptor';
import { ProwalksComponent } from './prowalks/prowalks.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProwalksComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [],
  //providers: [ { provide : HTTP_INTERCEPTORS , useClass : myHttpInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
