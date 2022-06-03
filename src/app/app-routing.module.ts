import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AllDetailComponent } from './all-detail/all-detail.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SingleDataComponent } from './single-data/single-data.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'cart' , component: CartComponent, canActivate: [AuthGuard],
   children: [ {path:'', component: AddToCartComponent},{path: 'address' ,  component: AllDetailComponent },
   {path: 'order-placed' ,  component: ConfirmOrderComponent }
  ]
  },
  {path:'login' , component: LoginComponent},
  {path:'product/:id', component: SingleDataComponent},
  {path: 'place-order', component: OrderHistoryComponent},
  {path: 'wishlist' , component : WishlistComponent, canActivate: [AuthGuard]},
  {path: 'order-confirm' , component: ConfirmOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddToCartComponent,AllDetailComponent]
