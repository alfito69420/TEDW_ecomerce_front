import { Component } from '@angular/core';
import { UsuariosServiceService } from '../../../services/usuarios-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {

  public productos: Array<any> = []
  public filter_producto = ''

  constructor(private _usuarioService: UsuariosServiceService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._usuarioService.vista_productos(this.filter_producto).subscribe(
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
