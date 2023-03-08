import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductViewComponent } from './Pages/product-view/product-view.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ErrorComponent } from './Pages/error/error.component';


const routes: Routes = [
  {
    path:'', component:ProductsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path:'product-view/:id', component:ProductViewComponent
  },
  {
    path:'**', component:ErrorComponent
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
