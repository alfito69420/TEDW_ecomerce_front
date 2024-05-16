import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ //Aquí definimos las rutas con base a los componentes que se vayan creando
      {}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
