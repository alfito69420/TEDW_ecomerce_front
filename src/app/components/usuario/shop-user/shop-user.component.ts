import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../../../services/usuarios-service.service';

@Component({
  selector: 'app-shop-user',
  templateUrl: './shop-user.component.html',
  styleUrl: './shop-user.component.css'
})
export class ShopUserComponent implements OnInit {
  public products_user: Array<any> = []
  public filter_product_user = ''

  constructor(private _usuarioService: UsuariosServiceService) {

  }

  ngOnInit() {
    this.getProductsUser();
  }

  getProductsUser() {
    this._usuarioService.vista_productos(this.filter_product_user).subscribe(
      response => {
        console.log(response);
        this.products_user = response.data;
      },
      error => {
        console.error('Error al obtener los productos', error);
      }
    );
  }
}
