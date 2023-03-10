 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductsComponent } from './Pages/products/products.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 