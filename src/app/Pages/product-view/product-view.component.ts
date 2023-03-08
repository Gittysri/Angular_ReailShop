import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent implements OnInit{
  constructor (private productService: ProductsService,private activatedRoute : ActivatedRoute, private router : Router, private cartService:CartService){}

  products : Array<any> = []
  singleProduct : any ;
  isProductInCart: boolean = false
  cartItemCount:any;
  
  

  ngOnInit(): void {
    this.cartService.cartSubject.subscribe((cartItems: any) => {
      this.cartItemCount = cartItems.length;
    })
    let id=0;

    this.activatedRoute.paramMap.subscribe((data: any) => {
      id = data.params.id
    

    this.productService.getProducts('products').subscribe((res : any) => {
      this.products = res
      this.products = this.products.filter((data : any) => data.id == id);
      if(this.products.length<=0){
        this.router.navigateByUrl('');
      }
      this.singleProduct = this.products[0];
    },(error : any) => {
      console.log(error)
    })
    

    
  })

  

    }
    addCart(value: any){
      this.cartService.addProductToCart(value);
      this.isProductInCart = true;
      // console.log(value);
      // let cartDataNull = localStorage.getItem('localCart');
      // if(cartDataNull == null){
      //   let storeDataGet:any = [];
      //   storeDataGet.push(value);
      //   localStorage.setItem('localCart', JSON.stringify(storeDataGet));
      // }else{
      //   var id = value.singleProductId;
      //   let index:number = -1;
      // }
      // localStorage.setItem('localCart', JSON.stringify(value));
    }
  }


