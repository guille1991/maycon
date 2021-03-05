import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  value1: number;
  value2: number;
  lista_productos_en_carrito: any;
  costo_total : number;
  descuento : number;
  siguienteDescuento : number;
  costoDescontado: number;
  cantidad_total : number;
  fecha: string;
  mejor_producto : any;
  productosSinStock: string[];
  

  constructor(private dataService: DataService) {
    this.productosSinStock = [];
  }

  ngOnInit(): void {

    
    this.verificar_existencia_carrito();
    if(this.dataService.cantidad_carrito > 0){
      this.obtener_mejor_producto();
    }
    this.fecha = this.obtener_fecha();

    this.verificarStockDeProducto();
    this.controlarDescuento();


  }

  controlarDescuento() {
    if (this.costo_total < 10000) {
      this.siguienteDescuento = 10000;
      this.descuento = 0;
      this.costoDescontado = 0;
    } else if (this.costo_total < 20000) {
      this.siguienteDescuento = 20000;
      this.descuento = 10;
    } else if (this.costo_total < 30000) {
      this.siguienteDescuento = 30000;
      this.descuento = 20;
    } else {
      this.siguienteDescuento = 30000;
      this.descuento = 20;
    }
    if (this.descuento != 0) {
      this.costoDescontado = Math.round((this.costo_total/100)*this.descuento);
    }

  }

  verificarStockDeProducto() {
    this.productosSinStock = [];
        this.lista_productos_en_carrito.forEach((element: any) => {
          if (element.cantidad > element.stock) {
            if (!this.productosSinStock.includes(element.name)) {
              // console.log('no hay stock asi que se agrega ',element.name);
              this.productosSinStock.push(element.name);
            }
          } else {
            if (this.productosSinStock.includes(element.name)) {
              let result = this.productosSinStock.findIndex((x: any) => x === element.name);
              this.productosSinStock.splice(result, 1);
            }
          }


        });
  }

  verificar_existencia_carrito(){
    let check_carrito = localStorage.getItem('carrito_maycon');
    if(check_carrito){
      let x_carrito =  JSON.parse(check_carrito);
      this.lista_productos_en_carrito = x_carrito;

      //this.dataService.cantidad_carrito = this.lista_productos_en_carrito.length;
      let aux: any = 0;
    this.lista_productos_en_carrito.forEach((element: any) => {
      aux += element.cantidad;
    });
      this.dataService.cantidad_carrito = aux;
      //

      this.costo_total = 0;
      this.cantidad_total = 0;
      this.lista_productos_en_carrito.forEach((producto : any) => {
        this.costo_total = this.costo_total + ((producto.price * producto.bulto)) * producto.cantidad;
        this.cantidad_total = this.cantidad_total + producto.cantidad;
      });
    }else{
      this.dataService.cantidad_carrito = 0;
    }
  }

  obtener_fecha(){
    let f = new Date();
    let d = f.getUTCDate();
    let m =f.getUTCMonth() + 1;
    let a = f.getFullYear();
    return d+'/'+m+'/'+a;
  }

  obtener_mejor_producto(){
    this.mejor_producto = this.lista_productos_en_carrito[0];
    this.lista_productos_en_carrito.forEach((producto : any) => {
      if(producto.cantidad > this.mejor_producto.cantidad){
        this.mejor_producto = producto;
      }
    })
  };

  confirmar_compra(){
    if (this.lista_productos_en_carrito.length < 1){
      Swal.fire({
        icon: 'info',
        html: 'Carrito vacio',
        timer: 3900,
        showConfirmButton: false
      });
    } else{
      Swal.fire({
        icon: 'success',
        html: 'Gracias por su compra',
        timer: 3900,
        showConfirmButton: false
      });
      localStorage.removeItem('carrito_maycon');
      setTimeout(() => {
        window.location.href = "/principal";
      }, 4000);
    }

  }

  onClickQuitar($event : any) {
    let aux: any = localStorage.getItem('carrito_maycon');

      if (aux) {
        aux = JSON.parse(aux);
        var result = aux.findIndex((x: any) => x.id ===$event.id);
        aux[result].cantidad --;
        if (aux[result].cantidad > 0) {
          localStorage.setItem("carrito_maycon", JSON.stringify(aux));
          this.verificar_existencia_carrito();
          this.obtener_mejor_producto();
          this.verificarStockDeProducto();
          this.controlarDescuento();
        } else {
          this.onClickBorrar($event);
        }
      }
  }

  onClickAgregar($event : any) {
    let aux: any = localStorage.getItem('carrito_maycon');
      if (aux) {
        aux = JSON.parse(aux);
        var result = aux.findIndex((x: any) => x.id ===$event.id);
        aux[result].cantidad ++;
        localStorage.setItem("carrito_maycon", JSON.stringify(aux));
        this.verificar_existencia_carrito();
        this.obtener_mejor_producto();
        this.verificarStockDeProducto();
        this.controlarDescuento();
    }
  }

  onClickBorrar($event :any) {

    let aux: any = localStorage.getItem('carrito_maycon');
    if (aux) {
      aux = JSON.parse(aux);
      var result = aux.findIndex((x: any) => x.id ===$event.id);
      aux.splice(result, 1);
      localStorage.setItem("carrito_maycon", JSON.stringify(aux));

      this.verificar_existencia_carrito();
      this.obtener_mejor_producto();

      this.verificarStockDeProducto();
      this.controlarDescuento();


    }






  }

}
