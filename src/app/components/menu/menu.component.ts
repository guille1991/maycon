import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DataService } from '../../services/data.service';
import { Producto } from './../../models/producto.model';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  busqueda:string;
  productos_backup : Producto[];

  constructor(
    public dataService: DataService,
    private router: Router, 
    private route: ActivatedRoute
    ){

  }
  ngOnInit(): void {
    this.productos_backup = this.dataService.productos;
  }

  busca_producto(algo: any){
    if (algo.keyCode == 13) {
      /* Swal.fire({
        icon: 'info',
        html: 'Se intenta nuna búsqueda de '+ algo.target.value +' sobre el array? cuando vuelva a 0 recupera de un vector backup ?',
        confirmButtonText: 'Dale'
      }) */
      this.busqueda = '';
      this.router.navigate([`/principal`]);

    }
  }
}
