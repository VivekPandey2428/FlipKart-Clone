import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';


const appRoutes:Routes=[
  {path:'home', component:HomepageComponent},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'cart',component:CartComponent},
  {path:'**',redirectTo:'home'}
]

@NgModule({
    declarations: [ 
      ],
imports:[
      RouterModule.forRoot(appRoutes,{
        anchorScrolling:'enabled'
      })
],

exports:[RouterModule]
})
export class AppRoutingModule{

}