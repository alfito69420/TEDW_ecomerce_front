import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-ordenes-compra',
  templateUrl: './ordenes-compra.component.html',
  styleUrls: ['./ordenes-compra.component.css'],
})
export class OrdenesCompraComponent implements OnInit, AfterViewInit {
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
        categoria: 'Electrónica',
        id_producto: 'producto1',
        fecha: '2024-05-27',
      },
      {
        id: 2,
        monto_descuento: 20,
        monto_total: 180,
        cantidad: 200,
        categoria: 'Ropa',
        id_producto: 'producto2',
        fecha: '2024-05-28',
      },
    ];

    this.orderToEdit = {};
    this.orderToDelete = {};
  }

  ngAfterViewInit(): void {
    this.renderUserCategoryChart();
    this.renderProductSalesChart();
  }

  private renderUserCategoryChart(): void {
    const canvas = document.getElementById(
      'userCategoryChart'
    ) as HTMLCanvasElement;
    if (!canvas) {
      console.error(
        'No se encontró el elemento canvas para la gráfica de categorías de usuarios.'
      );
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('No se pudo obtener el contexto 2D del canvas.');
      return;
    }

    const userCategories = this.orders.reduce(
      (categories: { [key: string]: number }, order) => {
        if (order.categoria in categories) {
          categories[order.categoria]++;
        } else {
          categories[order.categoria] = 1;
        }
        return categories;
      },
      {}
    );

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(userCategories),
        datasets: [
          {
            label: 'Cantidad de Compras por Categoría de Usuario',
            data: Object.values(userCategories),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  private renderProductSalesChart(): void {
    const canvas = document.getElementById(
      'productSalesChart'
    ) as HTMLCanvasElement;
    if (!canvas) {
      console.error(
        'No se encontró el elemento canvas para la gráfica de ventas de productos.'
      );
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('No se pudo obtener el contexto 2D del canvas.');
      return;
    }

    const productSales = this.orders.reduce(
      (products: { [key: string]: number }, order) => {
        if (order.id_producto in products) {
          products[order.id_producto] += order.cantidad;
        } else {
          products[order.id_producto] = order.cantidad;
        }
        return products;
      },
      {}
    );

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(productSales),
        datasets: [
          {
            label: 'Ventas de Productos',
            data: Object.values(productSales),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
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
