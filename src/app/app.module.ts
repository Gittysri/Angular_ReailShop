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





@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    SidebarComponent,
    ProductViewComponent,
    CartComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 