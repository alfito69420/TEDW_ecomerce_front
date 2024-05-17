import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
<<<<<<< Updated upstream
=======
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/usuario/index/index.component';
import { NavUsuarioComponent } from './components/usuario/nav-usuario/nav-usuario.component';
import { CartComponent } from './components/usuario/cart/cart.component';
import { ShopUserComponent } from './components/usuario/shop-user/shop-user.component';
import { ServicesUserComponent } from './components/usuario/services-user/services-user.component';
import { ContactUserComponent } from './components/usuario/contact-user/contact-user.component';
import { AboutUserComponent } from './components/usuario/about-user/about-user.component';
import { IndexComponent } from './components/usuario/index/index.component';
import { NavUsuarioComponent } from './components/usuario/nav-usuario/nav-usuario.component';
import { CartComponent } from './components/usuario/cart/cart.component';
import { ShopUserComponent } from './components/usuario/shop-user/shop-user.component';
import { ServicesUserComponent } from './components/usuario/services-user/services-user.component';
import { ContactUserComponent } from './components/usuario/contact-user/contact-user.component';
import { AboutUserComponent } from './components/usuario/about-user/about-user.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
<<<<<<< Updated upstream
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ //Aquí definimos las rutas con base a los componentes que se vayan creando
      {path: '', component:HomeComponent},
      {path: 'shop', component:ShopComponent},
      {path: 'services', component:ServicesComponent},
      {path: 'contact', component:ContactComponent},
      {path: 'about', component:AboutComponent},
      {path: '**', redirectTo:'/', pathMatch: 'full'}
    ])
=======
    FooterComponent,
    LoginComponent,
    IndexComponent,
    NavUsuarioComponent,
    CartComponent,
    ShopUserComponent,
    ServicesUserComponent,
    ContactUserComponent,
    AboutUserComponent,
    IndexComponent,
    NavUsuarioComponent,
    CartComponent,
    ShopUserComponent,
    ServicesUserComponent,
    ContactUserComponent,
    AboutUserComponent,
    IndexComponent,
    NavUsuarioComponent,
    CartComponent,
    ShopUserComponent,
    ServicesUserComponent,
    ContactUserComponent,
    AboutUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //Aquí definimos las rutas con base a los componentes que se vayan creando
      { path: 'home', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'home', component: HomeComponent },
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
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
      { path: 'user/home', component: IndexComponent },
      { path: 'user/cart', component: CartComponent },
      { path: 'user/shop', component: ShopUserComponent },
      { path: 'user/services', component: ServicesUserComponent },
      { path: 'user/contact', component: ContactUserComponent },
      { path: 'user/about', component: AboutUserComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
      { path: 'user/home', component: IndexComponent },
      { path: 'user/cart', component: CartComponent },
      { path: 'user/shop', component: ShopUserComponent },
      { path: 'user/services', component: ServicesUserComponent },
      { path: 'user/contact', component: ContactUserComponent },
      { path: 'user/about', component: AboutUserComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ]),
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
