import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
})
export class GraficasComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.renderOrdersChart();
  }

  private renderOrdersChart(): void {
    const canvas = document.getElementById('ordersChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error(
        'No se encontró el elemento canvas para la gráfica de pedidos.'
      );
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('No se pudo obtener el contexto 2D del canvas.');
      return;
    }

    // Datos de ejemplo
    const years = [2021, 2022, 2023]; // Años a mostrar
    const ordersData = {
      Enero: [50, 45, 60],
      Febrero: [40, 35, 50],
      Marzo: [60, 55, 70],
      Abril: [70, 65, 80],
      Mayo: [80, 75, 90],
      Junio: [90, 85, 100],
      Julio: [100, 95, 110],
      Agosto: [110, 105, 120],
      Septiembre: [120, 115, 130],
      Octubre: [130, 125, 140],
      Noviembre: [140, 135, 150],
      Diciembre: [150, 145, 160],
    };

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(ordersData),
        datasets: years.map((year, index) => ({
          label: `Pedidos en ${year}`,
          data: Object.values(ordersData).map((monthData) => monthData[index]),
          fill: false,
          borderColor: `rgba(59, 93, 80, ${index === 0 ? '1' : '0.5'})`,
          tension: 0.1,
        })),
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
}
