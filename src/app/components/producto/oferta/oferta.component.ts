import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  productos_en_oferta: any;
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.productos_en_oferta = this.dataService.productos_oferta;
    // console.log(this.productos_en_oferta);
  }

}
