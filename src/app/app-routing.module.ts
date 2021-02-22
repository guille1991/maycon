import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '',   redirectTo: '/principal', pathMatch: 'full' },
  { path: 'productos/:productoId', component: ProductoComponent},
  { path: '**', component: PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
