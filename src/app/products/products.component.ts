import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Scroll } from '@angular/router';
import { SubjectService } from '../subject.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searchText:string='';
  subscription:Subscription;
  price:any;
  loading:Observable<boolean>=of(false);
  messageService: any;
  constructor(private cartService:CartService,private toastr:ToastrService,private route:Router, private viewPortScroller:ViewportScroller,private httpClient:HttpClient, private subject:SubjectService) {
   }
   sendMessage():void{
    this.subject.sendMessage('Hello this is Subject');
  }
  data={};
  ngOnInit(){
    this.httpClient.get('https://reqres.in/api/unknown').subscribe(data=> this.data=data);
    ///this.getPrice();
  }
  products=[
    {Model:"APPLE iPhone 12 (Black, 64 GB)",Img:"https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70",price:"52000"},
    {Model:"APPLE iPhone 12 (Black, 128 GB)",Img:"https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/2/r/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfcswp9fh5.jpeg?q=70",price:"62000"},
    {Model:"SAMSUNG Galaxy F12 (Sky Blue, 64 GB)",Img:"https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/9/k/s/galaxy-f12-sm-f127glbiins-samsung-original-imagftmhhhvghq7w.jpeg?q=70",price:"11499"},
    {Model:"SAMSUNG Galaxy F22 (Denim Blue, 128 GB)",Img:"https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/j/5/7/galaxy-f22-sm-e225flbdins-samsung-original-imag4z99fp4qdfby.jpeg?q=70",price:"14999"},
    {Model:"vivo X70 Pro+ (Enigma Black, 256 GB) ",Img:"https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/c/q/x70-pro-v2114-vivo-original-imag7bq5m6bbefup.jpeg?q=70",price:"79000"},
    {Model:"vivo X70 Pro (Cosmic Black, 256 GB) ",Img:"https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/mobile/m/u/v/x70-pro-v2105-vivo-original-imag7bqffupuahsh.jpeg?q=70",price:"52000"},
    {Model:"OPPO Reno6 5G (Aurora, 128 GB) ",Img:"https://rukminim1.flixcart.com/image/312/312/kr2e3680/mobile/b/q/v/reno6-5g-cph2251-oppo-original-imag4xp73qsqrtnt.jpeg?q=70",price:"29000"},
    {Model:"OPPO Reno6 Pro 5G (Majestic Gold, 256 GB)  ",Img:"https://rukminim1.flixcart.com/image/416/416/ktd9mkw0/mobile/b/l/m/reno6-pro-5g-cph2249-oppo-original-imag6pmnnkthda6y.jpeg?q=70",price:"42000"},
    {Model:"SAMSUNG Galaxy S21 (Phantom Violet, 256 GB) ",Img:"https://rukminim1.flixcart.com/image/312/312/kjvrdzk0/mobile/g/7/9/samsung-galaxy-s21-sm-g991bzvdinu-original-imafzch8gkhpzzzh.jpeg?q=70",price:"36000"},
    {Model:"APPLE iPhone 12 (Black, 64 GB)",Img:"https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70",price:"52000"},

  ]

  addToCart(product:Product){
    this.cartService.addToCart(product);
    console.log(product);
    console.log(this.cartService.getItems());
    this.toastr.success("your product has been added to cart ");
  }
  Scroll(elementId:string){
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
