import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit{

  constructor(private productService: ProductsService){}

  products : any = []

  ngOnInit(): void {
    this.productService.getProducts('products').subscribe((data : any) => {
      
      this.products = data;
    },(err: any) => {
      console.log(err)
    })
  }

}
