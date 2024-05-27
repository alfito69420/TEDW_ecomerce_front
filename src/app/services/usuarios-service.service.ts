import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from './url';
import { JwtHelperService } from '@auth0/angular-jwt';

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

   vista_productos(filtro:any):Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json")
    return this._http.get(this.url+"products/get-all"+filtro, {headers:headers})
  }

  obtener_categorias(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.get(this.url + 'categories/get-all', { headers: headers })
  }
}

