import { DataService } from '../../services/data.service';
import { Producto } from '../../models/producto.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoId: number;
  producto: Producto;

  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService) {
    this.productoId = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productoId = params.productoId;
    });

    

    let arrProductos: Producto[] = this.dataService.getAll();
    arrProductos = arrProductos.concat(this.dataService.productos_oferta); 
    let aux = arrProductos.filter(obj => {
      return obj.id == this.productoId;
    });
    this.producto = aux[0];

    /* console.log(this.dataService.cantidad_carrito); */


  }

}
