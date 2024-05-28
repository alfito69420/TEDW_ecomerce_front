import { Component } from '@angular/core';
import { UsuariosServiceService } from '../../../services/usuarios-service.service';
import { response } from 'express';

@Component({
  selector: 'app-nav-usuario',
  templateUrl: './nav-usuario.component.html',
  styleUrl: './nav-usuario.component.css'
})
export class NavUsuarioComponent {

  token: any;
  id: any;
  user_lc: any;
  usuario: any;

  constructor(private _usuarioService: UsuariosServiceService) {
    this.token = localStorage.getItem('token')
    this.id = localStorage.getItem('_id')
    this.user_lc = undefined


    if (this.token && this.id) {
      this._usuarioService.obtener_usuario(this.id, this.token).subscribe(
        response => {
          console.log(response);
          this.usuario = response.data;
          localStorage.setItem('user_data', JSON.stringify(this.usuario));
          if (localStorage.getItem('user_data')) {
            this.user_lc = JSON.parse(localStorage.getItem('user_data')!);
          } else {
            this.user_lc = undefined;
          }
        },
        error => {
          console.log(error);
          this.usuario = undefined;
        }
      );
    } else {
      console.warn('Token o ID no están disponibles en localStorage');
    }
  }
}
