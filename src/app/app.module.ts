import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
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
import { IndexComponent } from './components/usuario/index/index.component';
import { NavUsuarioComponent } from './components/usuario/nav-usuario/nav-usuario.component';
import { CartComponent } from './components/usuario/cart/cart.component';
import { ShopUserComponent } from './components/usuario/shop-user/shop-user.component';
import { ServicesUserComponent } from './components/usuario/services-user/services-user.component';
import { ContactUserComponent } from './components/usuario/contact-user/contact-user.component';
import { AboutUserComponent } from './components/usuario/about-user/about-user.component';
import { OpcionesComponent } from './components/usuario/opciones/opciones.component';
import { HistorialOrdenesComponent } from './components/usuario/historial-ordenes/historial-ordenes.component';
import { GraficasComponent } from './components/usuario/graficas/graficas.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
//import * as $ from 'jquery';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { ProductosComponent } from './components/admin/productos/productos.component';
import { OrdenesCompraComponent } from './components/admin/ordenes-compra/ordenes-compra.component';
import { CategoriasComponent } from './components/admin/categorias/categorias.component';
import { ProveedoresComponent } from './components/admin/proveedores/proveedores.component';
import { CuponesComponent } from './components/admin/cupones/cupones.component';
import { MetodosPagoComponent } from './components/admin/metodos-pago/metodos-pago.component';
import { NavAdminComponent } from './components/admin/nav-admin/nav-admin.component';

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
    IndexComponent,
    NavUsuarioComponent,
    CartComponent,
    ShopUserComponent,
    ServicesUserComponent,
    ContactUserComponent,
    AboutUserComponent,
    OpcionesComponent,
    HistorialOrdenesComponent,
    GraficasComponent,
    UsuariosComponent,
    ProductosComponent,
    OrdenesCompraComponent,
    CategoriasComponent,
    ProveedoresComponent,
    CuponesComponent,
    MetodosPagoComponent,
    NavAdminComponent,
  ],
  imports: [
    DataTablesModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      //Aquí definimos las rutas con base a los componentes que se vayan creando
      { path: '', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user/home', component: IndexComponent },
      { path: 'user/cart', component: CartComponent },
      { path: 'user/shop', component: ShopUserComponent },
      { path: 'user/services', component: ServicesUserComponent },
      { path: 'user/contact', component: ContactUserComponent },
      { path: 'user/about', component: AboutUserComponent },
      { path: 'user/opciones', component: OpcionesComponent },
      { path: 'user/historial', component: HistorialOrdenesComponent },
      { path: 'user/graficas', component: GraficasComponent },
      { path: 'admin/usuarios', component: UsuariosComponent },
      { path: 'admin/productos', component: ProductosComponent },
      { path: 'admin/ordenes-compra', component: OrdenesCompraComponent },
      { path: 'admin/categorias', component: CategoriasComponent },
      { path: 'admin/proveedores', component: ProveedoresComponent },
      { path: 'admin/cupones', component: CuponesComponent },
      { path: 'admin/metodos-pago', component: MetodosPagoComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ]),
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule { }
