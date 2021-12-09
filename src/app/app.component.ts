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
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",desc:"Beauty,Toys and More"},
  ];
  imageSlider=[
    {img:"https://m.media-amazon.com/images/I/51PmJtQaLZL._SX3000_.jpg"},
    {img:"https://m.media-amazon.com/images/I/616VZnvmhPL._SX3000_.jpg"},
    {img:"https://m.media-amazon.com/images/I/51PmJtQaLZL._SX3000_.jpg"},
    {img:"https://m.media-amazon.com/images/I/61S7tScATML._SX3000_.jpg"},
  ]
  DealsOfTheDay=[
    {image:"https://rukminim1.flixcart.com/image/150/150/k0r15e80/shoe/w/c/c/dtaw19fw-011-8-ducati-navy-original-imafkh3hcvadpjg8.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/150/150/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/150/150/jv19qq80/accessories-combo/x/s/g/bw3095-hornbull-original-imafgffhcgzrucm7.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/150/150/k0r15e80/shoe/w/c/c/dtaw19fw-011-8-ducati-navy-original-imafkh3hcvadpjg8.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/150/150/kq8dua80/diary-notebook/f/a/3/navneet-youva-soft-bound-long-book-21-cm-x-29-7-cm-single-line-original-imag4ad4kfva9hgc.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/150/150/jv19qq80/accessories-combo/x/s/g/bw3095-hornbull-original-imafgffhcgzrucm7.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/150/150/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/150/150/k0plpjk0/precious-ring/j/8/p/c013095-18k-candere-by-kalyan-jewellers-original-imafe5k8zfgjhjx8.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/150/150/kq8dua80/diary-notebook/f/a/3/navneet-youva-soft-bound-long-book-21-cm-x-29-7-cm-single-line-original-imag4ad4kfva9hgc.jpeg?q=70",brand:"Fcuk, Ducati..",offer:"50-80+Extra 5% off",Category:"Footwear BestSeller"},
  ] 
  icons=[
    {leftarrow:"https://cdn-icons.flaticon.com/png/512/2985/premium/2985161.png?token=exp=1638970308~hmac=1563ba42b488dbc2c6f28ffd9bc46d87"},
    {rightarrow:"https://cdn-icons-png.flaticon.com/512/271/271228.png"}
  ]
  SuggestedForYou=[
    {image:"https://rukminim1.flixcart.com/image/312/312/k0flmkw0/tablet/h/h/6/lenovo-za490027in-original-imafk8kjxpats2wh.jpeg?q=70",brand:"Lenovo Tab M10 (HD) 2 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/312/312/k55n0y80/tablet/y/j/t/lenovo-za4y0079in-original-imafnwhkqztduncc.jpeg?q=70",brand:"Lenovo M10 FHD REL 3 GB RAM 32 GB ROM 10.04 inch with Wi-Fi Only Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/312/312/k0y6cnk0/tablet/h/b/a/lenovo-za4g0007in-original-imafkmg73dzuhnxq.jpeg?q=70",brand:"LAVA Magnum XL 2 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/312/312/k0flmkw0/tablet/h/h/6/lenovo-za490027in-original-imafk8kjxpats2wh.jpeg?q=70",brand:"Lenovo M10 FHD REL 3 GB RAM 32 GB ROM 10.04 inch with Wi-Fi Only Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},  
    {image:"https://rukminim1.flixcart.com/image/312/312/k0y6cnk0/tablet/h/b/a/lenovo-za4g0007in-original-imafkmg73dzuhnxq.jpeg?q=70",brand:"Lenovo Tab M10 (HD) 2 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/312/312/k0flmkw0/tablet/h/h/6/lenovo-za490027in-original-imafk8kjxpats2wh.jpeg?q=70",brand:"LAVA Magnum XL 2 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/312/312/k0y6cnk0/tablet/h/b/a/lenovo-za4g0007in-original-imafkmg73dzuhnxq.jpeg?q=70",brand:"Lenovo M10 FHD REL 3 GB RAM 32 GB ROM 10.04 inch with Wi-Fi Only Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/312/312/k55n0y80/tablet/y/j/t/lenovo-za4y0079in-original-imafnwhkqztduncc.jpeg?q=70",brand:"Lenovo Tab M10 (HD) 2 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    
    {image:"https://rukminim1.flixcart.com/image/312/312/k0y6cnk0/tablet/h/b/a/lenovo-za4g0007in-original-imafkmg73dzuhnxq.jpeg?q=70",brand:"LAVA Magnum XL 2 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/312/312/k55n0y80/tablet/y/j/t/lenovo-za4y0079in-original-imafnwhkqztduncc.jpeg?q=70",brand:"Lenovo Tab M10 (HD) 2 GB RAM 32 GB ROM 10.1 inch with Wi-Fi+4G Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
    {image:"https://rukminim1.flixcart.com/image/312/312/k0flmkw0/tablet/h/h/6/lenovo-za490027in-original-imafk8kjxpats2wh.jpeg?q=70",brand:"Lenovo M10 FHD REL 3 GB RAM 32 GB ROM 10.04 inch with Wi-Fi Only Tablet",offer:"6%off-₹10,999",Category:"Footwear BestSeller"},
  ] 
  constructor(){
  }
 
  
}
