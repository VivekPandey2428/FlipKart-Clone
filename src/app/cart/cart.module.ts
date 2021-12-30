import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartComponent } from "./cart.component";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
const appRoutes:Routes=[
    {path:'',component:CartComponent}
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(appRoutes)
    ], 
    declarations:[
        CartComponent,
    ],
    exports:[
        CartComponent
    ]

})
export class CartModule{
}