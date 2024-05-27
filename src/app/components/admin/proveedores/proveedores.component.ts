import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent implements OnInit {
  dtOptions: Config = {};
  providers: any[] = [];
  providerToEdit: any = {};
  providerToDelete: any = {};

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.providers = [
      {
        id: 1,
        nombre: 'Proveedor 1',
      },
      {
        id: 2,
        nombre: 'Proveedor 2',
      },
    ];

    this.providerToEdit = {};
    this.providerToDelete = {};
  }

  setEditProvider(provider: any) {
    this.providerToEdit = { ...provider };
  }

  setDeleteProvider(provider: any) {
    this.providerToDelete = { ...provider };
  }

  guardarCambios() {
    console.log('Guardando cambios del proveedor:', this.providerToEdit);
    this.providerToEdit = {};
  }

  borrarProveedor() {
    console.log('Borrando proveedor:', this.providerToDelete);
    this.providers = this.providers.filter(
      (provider) => provider.id !== this.providerToDelete.id
    );
    this.providerToDelete = {};
  }
}
