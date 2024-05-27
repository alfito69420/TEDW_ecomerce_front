import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  dtOptions: Config = {};
  categories: any[] = [];
  categoryToEdit: any = {};
  categoryToDelete: any = {};

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.categories = [
      {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción 1',
        id_proveedor: '100',
      },
      {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripción 2',
        id_proveedor: '200',
      },
    ];

    this.categoryToEdit = {};
    this.categoryToDelete = {};
  }

  setEditCategory(category: any) {
    this.categoryToEdit = { ...category };
  }

  setDeleteCategory(category: any) {
    this.categoryToDelete = { ...category };
  }

  guardarCambios() {
    console.log('Guardando cambios de la categoría:', this.categoryToEdit);

    this.categoryToEdit = {};
  }

  borrarCategoria() {
    console.log('Categoría borrada:', this.categoryToDelete);
    this.categories = this.categories.filter(
      (category) => category.id !== this.categoryToDelete.id
    );
    this.categoryToDelete = {};
  }
}
