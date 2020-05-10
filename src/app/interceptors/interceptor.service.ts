import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Paso por el interceptor');
    
    const headers = new HttpHeaders({
      'token-usuario': 'ABCSFAFDGRWWE#$F%$%434r3f4'
    });

    const reqClone = req.clone({headers});
    
    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(err: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.log('Registrado en log file');
    console.warn(err);
    return throwError('Error personalizado');
  }
  
}
