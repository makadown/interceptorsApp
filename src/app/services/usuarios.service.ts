import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Mario Serrano');


    const headers = new HttpHeaders({
      'token-usuario': 'ABCSFAFDGRWWE#$F%$%434r3f4'
    });

    return this.http.get('https://reqres.in/api/user', { params, headers })
      .pipe(
        map( (res: any) => res.data ),
        catchError( this.manejarError )
      );
  }

  manejarError(err: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.log('Registrado en log file');
    console.warn(err);
    return throwError('Error personalizado');
  }

}
