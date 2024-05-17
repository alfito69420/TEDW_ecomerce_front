import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TEDW_ecomerce_front';
<<<<<<< Updated upstream
=======
  showFooter = true;
  showNavUsers = true;
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
        this.showFooter = !event.url.includes('/login');

        // Lógica para showNavUsers
        this.showNavUsers =
          event.url.includes('/user/home') ||
          event.url.includes('/user/shop') ||
          event.url.includes('/user/services') ||
          event.url.includes('/user/about') ||
          event.url.includes('/user/contact') ||
          event.url.includes('/user/cart');

        this.showNavNotUsers = !this.showNavUsers;
      });
  }
>>>>>>> Stashed changes
}
