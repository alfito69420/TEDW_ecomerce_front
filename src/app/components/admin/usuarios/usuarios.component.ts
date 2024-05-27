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
  userToEdit: any = {};
  userToDelete: any = {};
  newUser: any = {
    firstName: '',
    lastName: '',
    lastName2: '',
    company: '',
    country: '',
    email: '',
    emailVerified: false,
    password: '',
  };

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

    this.userToEdit = {};
    this.userToDelete = {};
  }

  setEditUser(user: any) {
    this.userToEdit = { ...user };
  }

  setDeleteUser(user: any) {
    this.userToDelete = { ...user };
  }

  guardarCambios() {
    console.log('Guardando cambios del usuario:', this.userToEdit);
    this.userToEdit = {};
  }

  borrarUsuario() {
    console.log('Borrando usuario:', this.userToDelete);
    this.users = this.users.filter((user) => user.id !== this.userToDelete.id);
    this.userToDelete = {};
  }

  agregarUsuario() {
    const newId =
      this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    const nuevoUsuario = { id: newId, ...this.newUser };
    this.users.push(nuevoUsuario);
    console.log('Usuario añadido:', nuevoUsuario);
    this.newUser = {
      firstName: '',
      lastName: '',
      lastName2: '',
      company: '',
      country: '',
      email: '',
      emailVerified: false,
      password: '',
    };
  }
}
