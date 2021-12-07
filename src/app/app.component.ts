import { Component } from '@angular/core';
import { Caption } from './caption';
import { Images } from './images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image:Images[]=[
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",desc:"Top Offers"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",desc:"Grocery"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",desc:"Mobiles"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",desc:"Fashion"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",desc:"Electronics"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",desc:"Home"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",desc:"Appliances"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",desc:"Travel"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",desc:"Beauty, Toys and More"},
  ];
  imageSlider=[
    {img:"https://m.media-amazon.com/images/I/51PmJtQaLZL._SX3000_.jpg"},
    {img:"https://m.media-amazon.com/images/I/616VZnvmhPL._SX3000_.jpg"},
    {img:"https://m.media-amazon.com/images/I/51PmJtQaLZL._SX3000_.jpg"},
    {img:"https://m.media-amazon.com/images/I/61S7tScATML._SX3000_.jpg"},
  ]
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,
    "dot":true,    
    "infinite": true  
  }; 
  constructor(){
  }
  
}
