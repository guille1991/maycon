import { Producto } from './../models/producto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cantidad_carrito: number = 0;
  productos: Producto[];
  constructor() {
    this.productos = [
      {
        id: 1,
        src: 'assets/img/productos/agua.jpg',
        name: 'Agua Bonaqua',
        price: 53,
        bulto: 12,
        stock: 1,
      },
      {
        id: 2,
        src: 'assets/img/productos/alfajor.jpg',
        name: 'Guaymallen simple furta',
        price: 28,
        bulto: 50,
        stock: 1,
      },
      {
        id: 3,
        src: 'assets/img/productos/ddl.jpg',
        name: 'Dulce de leche Ilolay',
        price: 99,
        bulto: 10,
        stock: 1,
      },
      {
        id: 4,
        src: 'assets/img/productos/aceitunas.jpg',
        name: 'Aceitunas ligth',
        price: 67,
        bulto: 20,
        stock: 1,
      },
      {
        id: 5,
        src: 'assets/img/productos/fideos.jpg',
        name: 'Fideo moñito Lucheti',
        price: 49,
        bulto: 25,
        stock: 1,
      },
      {
        id: 6,
        src: 'assets/img/productos/gaseosa.jpg',
        name: 'Mocoreta lima 2L',
        price: 49,
        bulto: 12,
        stock: 1,
      },

      {
        id: 7,
        src: 'assets/img/productos/harina.jpg',
        name: 'Harina pureza 0000',
        price: 38,
        bulto: 20,
        stock: 1,
      },
      {
        id: 8,
        src: 'assets/img/productos/pan.jpg',
        name: 'Pan para panchos pepe',
        price: 83,
        bulto: 6,
        stock: 1,
      },

      {
        id: 9,
        src: 'assets/img/productos/polenta.jpg',
        name: 'Polenta Presto Pronta',
        price: 25,
        bulto: 10,
        stock: 1,
      },
      {
        id: 10,
        src: 'assets/img/productos/sal.jpg',
        name: 'Sal fina Selusal',
        price: 15,
        bulto: 6,
        stock: 1,
      },

      {
        id: 11,
        src: 'assets/img/productos/tomate.jpg',
        name: 'Tomate La Campagnola 250G',
        price: 35,
        bulto: 30,
        stock: 1,
      },
      {
        id: 12,
        src: 'assets/img/productos/vino.jpg',
        name: 'Vino espumante Tocornal',
        price: 230,
        bulto: 6,
        stock: 1,
      },
      {
        id: 13,
        src: 'assets/img/productos/yerba.jpg',
        name: 'Yerba Cruz de Malta Clasica 1K',
        price: 490,
        bulto: 12,
        stock: 1,
      }
    ];

   }

   public getAll(){
     return this.productos;
   }

}
