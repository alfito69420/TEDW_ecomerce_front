import { Component } from '@angular/core';
import { UsuariosServiceService } from '../../services/usuarios-service.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public usuario: any = {

  }

  constructor(private _ClienteService: UsuariosServiceService, private _router: Router) {

  }

  register(form: any) {
    if (form.valid) {
      this._ClienteService.registro_usuario(this.usuario).subscribe(
        response => {
          this.usuario = {
            nombre: "",
            ap_paterno: "",
            ap_materno: "",
            email: "",
            contrasena: ""
          };
        },
        error => {
          console.log(error);
        }
      );
    }
    else {//lógica de advertencia JQUERY

    }
  }

  login(form: any) {
    if (form.valid) {
      this._ClienteService.login_usuario(this.usuario).subscribe(
        response => {
          console.log(response);
          this.usuario = {
            email: "",
            contrasena: ""
          };
          this._router.navigate(["/user/home"]);
        },
        error => {
          console.log(error);
        }
      );
    }
    else {//lógica de advertencia JQUERY

    }
  }
}

