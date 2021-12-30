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
  discountedprice:number=0;
  constructor(private cartService:CartService) {
    console.log('component');
   }
  ngOnInit(): void {
    this.submit();
  }
  submit(){
    for(let i=0;i<this.items.length;i++){
      this.price+=parseInt(this.items[i].price);
      this.discountedprice+=Math.floor(parseInt(this.items[i].price)*1.1);
    }
    console.log(this.price);
  }
  fakeOrder(){
    window.alert("Thanks for your fake purchase This Item will never reach you..:)")
  }
}
