import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  public products : any = [];
  ngOnInit() {
    // this.cartService.getProducts()
    // .subscribe(res =>{
    //   this.products=res
    // })
    this.products=this.cartService.cartItemList
    console.log(this.products)
  }

}
