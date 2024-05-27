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
  newPaymentMethod: any = {
    metodo_de_pago: '',
  };

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
    // Actualiza el método de pago en la lista
    const index = this.paymentMethods.findIndex(
      (pm) => pm.id === this.paymentMethodToEdit.id
    );
    if (index !== -1) {
      this.paymentMethods[index] = { ...this.paymentMethodToEdit };
    }
    this.paymentMethodToEdit = {};
  }

  borrarMetodoPago() {
    console.log('Método de pago borrado:', this.paymentMethodToDelete);
    this.paymentMethods = this.paymentMethods.filter(
      (paymentMethod) => paymentMethod.id !== this.paymentMethodToDelete.id
    );
    this.paymentMethodToDelete = {};
  }

  agregarMetodoPago() {
    const newId =
      this.paymentMethods.length > 0
        ? this.paymentMethods[this.paymentMethods.length - 1].id + 1
        : 1;
    const nuevoMetodo = { id: newId, ...this.newPaymentMethod };
    this.paymentMethods.push(nuevoMetodo);
    console.log('Método de pago añadido:', nuevoMetodo);
    this.newPaymentMethod = {
      metodo_de_pago: '',
    };
  }
}
