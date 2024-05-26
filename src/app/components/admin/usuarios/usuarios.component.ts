import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  dtOptions: Config = {};
  users: any[] = [];
  userToEdit: any = {}; // Esta propiedad almacena los datos del usuario que se está editando

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.users = [
      {
        id: 1,
        firstName: 'Foo',
        lastName: 'Bar',
        lastName2: 'B',
        company: 'ABC Inc.',
        country: 'USA',
        email: 'foo.bar@example.com',
        emailVerified: true,
        password: '********',
      },
      {
        id: 2,
        firstName: 'Someone',
        lastName: 'Youknow',
        lastName2: 'C',
        company: 'XYZ Corp.',
        country: 'Canada',
        email: 'someone.youknow@example.com',
        emailVerified: false,
        password: '********',
      },
    ];
  }

  setEditUser(user: any) {
    this.userToEdit = { ...user };
  }

  guardarCambios() {
    console.log('Guardando cambios del usuario:', this.userToEdit);
  }
}
