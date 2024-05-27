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
  newCategory: any = {
    nombre: '',
    descripcion: '',
    id_proveedor: '',
  };

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
    const index = this.categories.findIndex(
      (c) => c.id === this.categoryToEdit.id
    );
    if (index !== -1) {
      this.categories[index] = { ...this.categoryToEdit };
    }
    this.categoryToEdit = {};
  }

  borrarCategoria() {
    console.log('Categoría borrada:', this.categoryToDelete);
    this.categories = this.categories.filter(
      (category) => category.id !== this.categoryToDelete.id
    );
    this.categoryToDelete = {};
  }

  agregarCategoria() {
    const newId =
      this.categories.length > 0
        ? this.categories[this.categories.length - 1].id + 1
        : 1;
    const nuevaCategoria = { id: newId, ...this.newCategory };
    this.categories.push(nuevaCategoria);
    console.log('Categoría añadida:', nuevaCategoria);
    this.newCategory = {
      nombre: '',
      descripcion: '',
      id_proveedor: '',
    };
  }
}
