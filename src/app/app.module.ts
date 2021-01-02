import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { AlertifyService } from './services/alertify.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProductFormClassicComponent } from './product/add-product-form-classic/add-product-form-classic.component';
import { AddProductFormReactiveComponent } from './product/add-product-form-reactive/add-product-form-reactive.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    CategoryComponent,
    ProductSearchPipe,
    SidebarComponent,
    AddProductFormClassicComponent,
    AddProductFormReactiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService,AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
