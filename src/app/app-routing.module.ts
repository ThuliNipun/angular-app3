import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './component/customer/customer.component';
import { ItemComponent } from './component/item/item.component';
import { OrderComponent } from './component/order/order.component';
import { PlaceOrderComponent } from './component/place-order/place-order.component';
import {NotFoundPageComponent} from "./component/not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'', redirectTo:'/customer',pathMatch:'full'},
  {path:'customer/:name', component:CustomerComponent},
  {path:'item', component:ItemComponent},
  {path:'order', component:OrderComponent},
  {path:'place-order', component:PlaceOrderComponent},
  {path:'**',component:NotFoundPageComponent} //should be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
