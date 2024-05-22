import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavUsuarioComponent } from './components/usuario/nav-usuario/nav-usuario.component';
import { CartComponent } from './components/usuario/cart/cart.component';
import { HomeUserComponent } from './components/usuario/home-user/home-user.component';
import { HistorialOrdenesComponent } from './components/usuario/historial-ordenes/historial-ordenes.component';
import { GraficasComponent } from './components/usuario/graficas/graficas.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    NavUsuarioComponent,
    CartComponent,
    HomeUserComponent,
    HistorialOrdenesComponent,
    GraficasComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //Aquí definimos las rutas con base a los componentes que se vayan creando
      { path: '', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user/cart', component: CartComponent },
      { path: 'user/home-user', component: HomeUserComponent },
      { path: 'user/historial', component: HistorialOrdenesComponent},
      { path: 'user/graficas', component: GraficasComponent},
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ]),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
