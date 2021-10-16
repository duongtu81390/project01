import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/service/api.service'
import {CartService} from 'src/app/service/cart.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api: ApiService, private cartService: CartService) { }
  productList: any;
  cartitem: any[];
  ngOnInit() {
   this.api.getProduct()
   .subscribe(res => 
    this.productList=res
    )

    console.log(this.productList)
  }
  addToCart(item){
    this.cartService.addToCart(item);
  }
  getProduct(){
    this.cartService.getProducts()
    .subscribe(res =>(
      this.cartitem=res
    ))
    console.log(this.cartitem)
  }
}
