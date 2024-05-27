import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../../services/usuarios-service.service';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
declare const noUiSlider: any;
declare const $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  public productos:Array<any> = []
  public filter_producto = ''

  constructor(private _usuarioService: UsuariosServiceService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
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
