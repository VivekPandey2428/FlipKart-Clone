import { Component } from '@angular/core';
import { Caption } from './caption';
import { Images } from './images';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private route:Router){

  }
  clicked:boolean=false;
  dropdownContent=[
    {content:"My Profile"},
    {content:"SuperCoin Zone"},
    {content:"Flipkart Plus Zone"},
    {content:"Orders"},
    {content:"Wishlist"},
    {content:"My Chats"},
    {content:"Coupons"},
    {content:"Gift Cards"},
    {content:"Notifications"},
    {content:"Logout"}
  ]
  icons={
    leftarrow:"https://cdn-icons.flaticon.com/png/512/2985/premium/2985161.png?token=exp=1638970308~hmac=1563ba42b488dbc2c6f28ffd9bc46d87",
    rightarrow:"https://cdn-icons-png.flaticon.com/512/271/271228.png",
    search:"https://cdn-user-icons.flaticon.com/48079/48079557/1639139573490.svg?token=exp=1639525912~hmac=94224c440b9789a2ac8322026084876a",
    downarrow:"https://cdn-user-icons.flaticon.com/48079/48079557/1639140583226.svg?token=exp=1639141489~hmac=54338eae049410f167d9a8f64ee9539f",
  }
  clicked3:boolean=false;
  clicked4:boolean=false;
  onclick(){
    this.clicked3=!this.clicked3;
  }
  email:any;
  password:any;
  number:any;
  profileForm = new FormGroup({
  });
  onSubmit(){
    this.clicked3=false;
  }
  mobileproducts(){
    this.route.navigate(['products']);
  }
  isitClicked(){
    this.clicked=!this.clicked;
  }
  negate(){
    this.clicked=false;
  }
  signup(){
    this.clicked3=!this.clicked3;
    this.clicked4=!this.clicked4;
  }
  negateall(){
    this.clicked3=false;
    this.clicked4=false;
  }
}
