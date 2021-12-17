import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SlickCarouselModule,
    SlideshowModule,
    SliderModule,
    IvyCarouselModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
