import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ItemComponent } from './component/item/item.component';
import { OrderComponent } from './component/order/order.component';
import { PlaceOrderComponent } from './component/place-order/place-order.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent,
    PlaceOrderComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
