import { Component } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  testimonio = [
    {
      autor: 'Maria Jones',
      cargo: 'Cliente Satisfecho',
      imagen: 'Maria.jpg',
      contenido: '¡Una experiencia de compra increíble! Encontré el vestido perfecto para esa ocasión especial y unos jeans que se convirtieron en mi nueva prenda favorita...'
    },
    {
      autor: 'Fernanda Rivera',
      cargo: 'Diseñadora de Interiores, Casa Bella',
      imagen: 'fernanda.jpg',
      contenido: '¡Una verdadera joya de compra! Encontré un abrigo elegante que se convirtió en el centro de todas las miradas y unas zapatillas cómodas que no puedo dejar de usar. La calidad y diseño de las prendas superaron mis expectativas,¡una experiencia de moda que recomiendo totalmente!'
    },
    {
      autor: 'Gustavo Torres',
      cargo: 'Director de Marketing, ABC Corp.',
      imagen: 'Gustavo.jpg',
      contenido: '¡Descubrimiento increíble en moda! Encontré el pantalón perfecto para cualquier ocasión y unos accesorios que realzaron mi estilo personal. La calidad y variedad de opciones me dejaron impresionado, ¡definitivamente mi tienda favorita para renovar mi armario!'
    }

  ];
}

