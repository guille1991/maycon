import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maycon - Venta online';


  constructor(public router: Router) {

  }

  onActivate(event: any) {
    window.scroll(0,0);
}
}
