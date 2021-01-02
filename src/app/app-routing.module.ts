import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductFormClassicComponent } from './product/add-product-form-classic/add-product-form-classic.component';
import { CategoryComponent } from './category/category.component';
import { AddProductFormReactiveComponent } from './product/add-product-form-reactive/add-product-form-reactive.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  
  {path:'products',component : ProductComponent},
  
  {path:'', redirectTo : 'products', pathMatch : 'full'},
  {path:'products/category/:categoryId', component : ProductComponent},
  {path:'products/add-product', component : AddProductFormClassicComponent, canActivate:[LoginGuard]},
  {path:'products/add-product-reactive', component : AddProductFormReactiveComponent},
  {path:'login', component : LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
