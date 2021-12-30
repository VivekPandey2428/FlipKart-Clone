import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgImageSliderModule } from 'ng-image-slider';
import { LightboxModule } from 'ngx-lightbox';
import { SliderModule } from 'angular-image-slider';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { Routes,RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';
import {  HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';
import { HeaderComponent } from './header/header.component';
import { MyInterceptor } from './my-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomepageComponent,
    FilterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SlickCarouselModule,
    SlideshowModule,
    SliderModule,
    IvyCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  exports:[RouterModule],
  providers: [
    AuthserviceService,
    {provide:HTTP_INTERCEPTORS, useClass:MyInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  to_implement_input:string="Input working";
  constructor(private route:Router){
  }
  ngOnInit(){

  }
}
