import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TEDW_ecomerce_front';

  showFooter = true;
  showNavUsers = true;
  showNavAdmin = true;
  showNavNotUsers = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        // Lógica para showFooter
        this.showFooter =
          !event.url.includes('/login') &&
          !event.url.includes('/admin/usuarios') &&
          !event.url.includes('/admin/productos') &&
          !event.url.includes('/admin/ordenes-compra') &&
          !event.url.includes('/admin/categorias') &&
          !event.url.includes('/admin/proveedores') &&
          !event.url.includes('/admin/cupones') &&
          !event.url.includes('/admin/metodos-pago');

        // Lógica para showNavUsers
        this.showNavUsers =
          event.url.includes('/user/home') ||
          event.url.includes('/user/shop') ||
          event.url.includes('/user/services') ||
          event.url.includes('/user/about') ||
          event.url.includes('/user/contact') ||
          event.url.includes('/user/cart') ||
          event.url.includes('/user/opciones');

        this.showNavAdmin =
          event.url.includes('/admin/usuarios') ||
          event.url.includes('/admin/productos') ||
          event.url.includes('/admin/ordenes-compra') ||
          event.url.includes('/admin/categorias') ||
          event.url.includes('/admin/proveedores') ||
          event.url.includes('/admin/cupones') ||
          event.url.includes('/admin/metodos-pago');

        this.showNavNotUsers = !this.showNavUsers && !this.showNavAdmin;
      });
  }
}
