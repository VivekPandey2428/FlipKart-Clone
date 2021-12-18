import { Component } from '@angular/core';
import { Caption } from './caption';
import { Images } from './images';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-200px)' }), animate('.0s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.0s ease-out', style({ transform: 'translateX(200px)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(200px)' }), animate('.0s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.0s ease-out', style({ transform: 'translateX(-200px)' }))], {
      optional: true,
    }),
  ]),
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ])]
})
export class AppComponent {
  clicked:boolean=false;
  active:boolean=false;
  active2:boolean=false;
  active3:boolean=false;
  active4:boolean=false;
  image:Images[]=[
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",desc:"Top Offers"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",desc:"Grocery"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",desc:"Mobiles"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",desc:"Fashion ⮟"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",desc:"Electronics ⮟"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",desc:"Home ⮟"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",desc:"Appliances ⮟"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",desc:"Travel"},
    {url:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",desc:"Beauty,Toys and More ⮟"},
  ];
  imageSlider=[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/1500x300_with-out-Bank.jpg"},
    {img:"https://images-na.ssl-images-amazon.com/images/G/31/img19/Luggage/Nov/Mega-travel-store/MTS-1242x450._CB445574023_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/BevFest/Dec21/Store-Banner-PC-1500X300-REVISED-X1.jpg"},
    {img:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/ba5d873c-81c7-4432-88ca-47b2ec7e56e7.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"},
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
  icons={
    leftarrow:"https://cdn-icons.flaticon.com/png/512/2985/premium/2985161.png?token=exp=1638970308~hmac=1563ba42b488dbc2c6f28ffd9bc46d87",
    rightarrow:"https://cdn-icons-png.flaticon.com/512/271/271228.png",
    search:"https://cdn-user-icons.flaticon.com/48079/48079557/1639139573490.svg?token=exp=1639525912~hmac=94224c440b9789a2ac8322026084876a",
    downarrow:"https://cdn-user-icons.flaticon.com/48079/48079557/1639140583226.svg?token=exp=1639141489~hmac=54338eae049410f167d9a8f64ee9539f",
  }
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

  Fashion=[
    {category:"Men's Top Wear"},
    {category:"Men's Bottom Wear"},
    {category:"Women's Ethnic"},
    {category:"Women's Western"},
    {category:"Men Footwear"},
    {category:"Women Footwear"},
    {category:"Watches and accessories"},
    {category:"Bags, Suitcases and Luggage"},
    {category:"Kids"},
    {category:"Essential"},
    {category:"Winter"}
  ]
  Electronics=[
    {category:"Audio"},
    {category:"Electronic GST Store"},
    {category:"Cameras and Accessories"},
    {category:"Computer Peripherals"},
    {category:"Gaming"},
    {category:"Health and Personal Care"},
    {category:"Laptop Accessories"},
    {category:"Laptop and Desktops"},
    {category:"Mobile Accessories"},
    {category:"Powerbank"},
    {category:"Smart Wearables"}
    
  ]
  ngAfterViewInit() {
    /*<----------------------------------Image Slider------------------------------------->
    <<<------------------Starts From here-------------->>>
    */
 /*<<<---------------------------------------End of Image Slider------------------------------------>>>*/
/*<<<----------------------------------Carousel Begins--------------------------->>>*/
    let carousel=document.querySelectorAll<HTMLElement>(".z");
    const arrowLeft2=<HTMLElement>document.getElementById("left-arrow2");
    const arrowRight2=<HTMLElement>document.getElementById("right-arrow2");
    var cnt=0;
    var to_slide=0;
    arrowLeft2.onclick = () =>{
      cnt--;
      var n=Math.floor(carousel.length/2);
      for(let i=0;i<carousel.length;i++){
        if(cnt<0){
          cnt=0;
        }
        else{
          to_slide=220*cnt;
          console.log(to_slide);
          carousel[i].style.left=`-${to_slide}px`;
        }
      }
    }
    arrowRight2.onclick = () =>{
      cnt++;
      var n=Math.floor(carousel.length/2);
      for(let i=0;i<carousel.length;i++){
        if(cnt>n-1){
          cnt=n-1;
        }
        else{
          to_slide=cnt*220;
          console.log(to_slide);
          carousel[i].style.left=`-${to_slide}px`;
        }
      }
    }
 
}
  constructor(private el:ElementRef){
  }
  ngOnInit(){
  }
  dropdown(){
    console.log("helo");
  }
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
  isitClicked(){
    this.clicked=!this.clicked;
  }
  negate(){
    this.clicked=false;
  }
  toggle(){
    this.active=!this.active;
  }
  unactive(){
    this.active=false;
  }
  toggle2(){
    this.active2=!this.active2;
  }
  unactive2(){
    this.active2=false;
  }
  toggle3(){
    this.active3=!this.active3;
  }
  toggle4(){
    this.active4=!this.active4;
  }
  unactive3(){
    this.active3=false;
  }
  unactive4(){
    this.active4=false;
  }
  counter: number = 0;
  onNext(){
    if(this.counter!=this.imageSlider.length-1){
      this.counter++;
    }
  }
  onPrevious(){
    if(this.counter>0){
      this.counter--;
    }
  }
  /*------------------------------>Login Modal<---------------------------- */
  clicked3:boolean=false;
  onclick(){
    this.clicked3=!this.clicked3;
  }
  email:any;
  password:any;
  profileForm = new FormGroup({
  });
  onSubmit(){
    
  }
}
