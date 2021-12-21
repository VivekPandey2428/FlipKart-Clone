import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items=this.cartService.getItems();
  price:number=0;
  constructor(private cartService:CartService) {
    for(let i=0;i<this.items.length;i++){
      this.price+=parseInt(this.items[i].price);
    }
    console.log(this.price);
   }
  ngOnInit(): void {
  }
  fakeOrder(){
    window.alert("Thanks for your fake purchase This Item will never reach you..:)")
  }
}
