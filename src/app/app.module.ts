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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
