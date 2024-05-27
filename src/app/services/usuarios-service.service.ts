import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {
  public url:any
  constructor(private _http:HttpClient) {
    this.url = URL.url
   }

   registro_usuario(data:any):Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url+"users/register", data, {headers:headers});
   }

   login_usuario(data:any):Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url+"users/login", data, {headers:headers});
   }
}

