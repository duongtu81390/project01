import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: any[] = []
  productList = new BehaviorSubject<any>([])
  constructor() { }
  addToCart(item) {
    this.cartItemList.push(item)
    this.productList.next(item)
    //console.log(this.cartItemList)
  }
  // getProducts() {
  //   return this.productList.asObservable();
  // }
  getProducts() : any {
      console.log(this.cartItemList)
      return this.cartItemList
   }
  getTotalPrice(): number {
    let totalPrice: number = 0
    this.cartItemList.map((a: any) => {
      totalPrice += a.total
    })
    return totalPrice
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id)
        this.cartItemList.slice(index, 1)
    })
  }
  removeAllItem(){
    this.cartItemList=[]
  }
}
