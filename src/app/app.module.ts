import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CarouselsComponent } from './appcarousels/carousels/carousels.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ViewDataComponent } from './view-data/view-data.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { routingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SingleDataComponent } from './single-data/single-data.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AllDetailComponent } from './all-detail/all-detail.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ConfirmrouteComponent } from './confirmroute/confirmroute.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselsComponent,
    ViewDataComponent,
    // AddToCartComponent,
    NavbarComponent,routingComponents, HomeComponent, LoginComponent, SingleDataComponent, WishlistComponent, OrderHistoryComponent, AllDetailComponent, CartComponent, ConfirmOrderComponent, ConfirmrouteComponent, ProfileComponent,
  ],
  imports: [
    BrowserModule,Ng2SearchPipeModule,
    AppRoutingModule,ReactiveFormsModule,
    NgbModule,CarouselModule,MatButtonModule,
    BrowserAnimationsModule,MatIconModule,HttpClientModule,FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
