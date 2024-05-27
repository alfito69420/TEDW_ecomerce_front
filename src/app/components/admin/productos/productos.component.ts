import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  dtOptions: Config = {};
  products: any[] = [];
  productToEdit: any = {};

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.products = [
      {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción 1',
        precio: '100',
        cantidad: 100,
        photo: 'foto1.jpg',
        id_cat_producto: 'Categoria 1',
      },
      {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripción 2',
        precio: '200',
        cantidad: 20,
        photo: 'foto2.jpg',
        id_cat_producto: 'Categoria 2',
      },
    ];

    this.productToEdit = {};
  }

  setEditProduct(product: any) {
    this.productToEdit = { ...product };
  }

  guardarCambios() {
    console.log('Guardando cambios del Producto:', this.productToEdit);

    this.productToEdit = {};
  }

  borrarProducto() {
    console.log('Producto borrado:', this.productToEdit);
  }
}
