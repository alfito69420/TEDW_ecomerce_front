import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../../services/usuarios-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public productos:Array<any> = []
  public filter_producto = ''

  constructor(private _invitadoService: UsuariosServiceService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this._invitadoService.vista_productos(this.filter_producto).subscribe(
      response => {
        console.log(response);
        this.productos = response.data;
      },
      error => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

}
