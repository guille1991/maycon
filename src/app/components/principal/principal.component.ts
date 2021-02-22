import { Producto } from '../../models/producto.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  public carrito: Object[] = [];
  p: number;
  productos: Producto[];

  constructor(private dataService: DataService) {
    this.p = 1;
  }

  ngOnInit(): void {

    this.verificar_existencia_carrito();
    this.productos = this.dataService.getAll();
  }

  verificar_existencia_carrito() {
    let check_carrito = localStorage.getItem('carrito_maycon');
    if (check_carrito) {
      let x_carrito = JSON.parse(check_carrito);
      this.carrito = x_carrito;
      //g
      let aux: any = 0;
      this.carrito.forEach((element: any) => {
        aux += element.cantidad;
      });
      this.dataService.cantidad_carrito = aux;


    } else {
      this.dataService.cantidad_carrito = 0;
    }
  }



  //Funcion en repacion llevaria otras comprobaciones, mejorando
  agregar_producto_a_carrito(producto: any) {
    let contador_no_existe = 0;

  let contador_total = this.carrito.length;






    if (this.carrito.length > 0) {
      this.carrito.forEach((producto_en_carro: any) => {
        if (producto.id == producto_en_carro.id) {
          producto_en_carro.cantidad = producto_en_carro.cantidad + 1;
        } else {
          contador_no_existe = contador_no_existe + 1;
        }
      });
      if(contador_no_existe == contador_total){
        producto.cantidad = 1;
        this.carrito.push(producto);
      }
    } else {
      producto.cantidad = 1;
      this.carrito.push(producto);
    }
    localStorage.setItem('carrito_maycon', JSON.stringify(this.carrito));
    //g

    let aux: any = 0;
    this.carrito.forEach((element: any) => {
      aux += element.cantidad;
    });


    //this.dataService.cantidad_carrito = this.carrito.length;
    this.dataService.cantidad_carrito = aux;
    //
  }

  mostrar_carrito() {
    //console.log(this.carrito);
  }

  onClick() {
    window.scrollTo(0, 0);
  }
}
