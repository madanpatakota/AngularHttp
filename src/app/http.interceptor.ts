import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class myHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    var updatgeheaders = new HttpHeaders({
      Autheriozaion: "Bearer abcdfghi"
    });

    var logoCompany = new HttpParams().set("Logo", "M6");

    var cloneRequest = request.clone({ headers: updatgeheaders , params : logoCompany })

    //request whi

    // 1 API ->                                    company
    // 2 API ->                                   -> Company
    // 3 API ->                                        -> company


    return next.handle(cloneRequest);
  }
}







              //                       localhost:3000/products
              // angular            <---------Endpoint------                   dotnet  http headers



              //                                       comments
              //                       ----------