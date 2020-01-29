import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DisplayComponent } from './display/display.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path : 'products/:productId' , component : ProductDetailsComponent},
  {path : '' , component: DisplayComponent},
  {path : 'cart', component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
