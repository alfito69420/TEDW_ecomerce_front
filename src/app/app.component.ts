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
  showNavUsers = false;
  showNavNotUsers = false;


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
        this.showFooter = !event.url.includes('/login');

        // Lógica para showNavUsers
        this.showNavUsers =
          event.url.includes('/user/home-user') ||
          event.url.includes('/user/historial') ||
          event.url.includes('/user/graficas') ||
          event.url.includes('/user/cart');

        this.showNavNotUsers = !this.showNavUsers;

      });
  }
}
