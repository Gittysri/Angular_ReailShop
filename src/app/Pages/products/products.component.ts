import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Ng2SearchPipe } from "ng2-search-filter";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit{

  constructor(private productService: ProductsService){}
  products : any = []
  term:any

  ngOnInit(): void {
    this.productService.getProducts('products').subscribe((data : any) => {
      
      this.products = data;
    },(err: any) => {
      console.log(err)
    })
  }

}
