import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingleDataComponent } from './single-data/single-data.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'cart' , component: AddToCartComponent, canActivate: [AuthGuard]},
  {path:'login' , component: LoginComponent},
  {path:'product/:id', component: SingleDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddToCartComponent]
