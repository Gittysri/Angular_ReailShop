 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductsComponent } from './Pages/products/products.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductViewComponent } from './Pages/product-view/product-view.component';
import { CartComponent } from './Pages/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ErrorComponent } from './Pages/error/error.component';
import { OrdersComponent } from './Pages/orders/orders.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    SidebarComponent,
    ProductViewComponent,
    CartComponent,
    ErrorComponent,
    OrdersComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 