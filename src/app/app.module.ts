import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './components/principal/principal.component';
import { PieComponent } from './components/pie/pie.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { ComprasComponent } from './components/usuario/compras/compras.component';
import { OfertaComponent } from './components/producto/oferta/oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    PieComponent,
    CarritoComponent,
    ProductoComponent,
    PerfilComponent,
    ComprasComponent,
    OfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
