import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-ordenes-compra',
  templateUrl: './ordenes-compra.component.html',
  styleUrls: ['./ordenes-compra.component.css'],
})
export class OrdenesCompraComponent implements OnInit {
  dtOptions: Config = {};
  orders: any[] = [];
  orderToEdit: any = {};
  orderToDelete: any = {};

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.orders = [
      {
        id: 1,
        monto_descuento: 10,
        monto_total: 90,
        cantidad: 100,
        id_usuario: 'usuario1',
        id_producto: 'producto1',
        fecha: '2024-05-27',
      },
      {
        id: 2,
        monto_descuento: 20,
        monto_total: 180,
        cantidad: 200,
        id_usuario: 'usuario2',
        id_producto: 'producto2',
        fecha: '2024-05-28',
      },
    ];

    this.orderToEdit = {};
    this.orderToDelete = {};
  }

  setEditOrder(order: any) {
    this.orderToEdit = { ...order };
  }

  setDeleteOrder(order: any) {
    this.orderToDelete = { ...order };
  }

  guardarCambios() {
    console.log('Guardando cambios de la Orden:', this.orderToEdit);
    this.orderToEdit = {};
  }

  borrarOrden() {
    console.log('Orden borrada:', this.orderToDelete);
    this.orders = this.orders.filter(
      (order) => order.id !== this.orderToDelete.id
    );
    this.orderToDelete = {};
  }
}
