import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-metodos-pago',
  templateUrl: './metodos-pago.component.html',
  styleUrls: ['./metodos-pago.component.css'],
})
export class MetodosPagoComponent implements OnInit {
  dtOptions: Config = {};
  paymentMethods: any[] = [];
  paymentMethodToEdit: any = {};
  paymentMethodToDelete: any = {};

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.paymentMethods = [
      {
        id: 1,
        metodo_de_pago: 'efectivo',
      },
      {
        id: 2,
        metodo_de_pago: 'tarjeta de crédito',
      },
    ];

    this.paymentMethodToEdit = {};
    this.paymentMethodToDelete = {};
  }

  setEditPaymentMethod(paymentMethod: any) {
    this.paymentMethodToEdit = { ...paymentMethod };
  }

  setDeletePaymentMethod(paymentMethod: any) {
    this.paymentMethodToDelete = { ...paymentMethod };
  }

  guardarCambios() {
    console.log(
      'Guardando cambios del método de pago:',
      this.paymentMethodToEdit
    );
    this.paymentMethodToEdit = {};
  }

  borrarMetodoPago() {
    console.log('Método de pago borrado:', this.paymentMethodToDelete);
    this.paymentMethods = this.paymentMethods.filter(
      (paymentMethod) => paymentMethod.id !== this.paymentMethodToDelete.id
    );
    this.paymentMethodToDelete = {};
  }
}
