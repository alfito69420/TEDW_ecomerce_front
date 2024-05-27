import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../../services/usuarios-service.service';
import { ActivatedRoute } from '@angular/router';
declare const noUiSlider: any;
declare const $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  public productos: any[] = [];

  constructor(private _usuarioService: UsuariosServiceService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this._usuarioService.vista_productos('').subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

}
