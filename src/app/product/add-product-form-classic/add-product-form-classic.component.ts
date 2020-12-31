import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-add-product-form-classic',
  templateUrl: './add-product-form-classic.component.html',
  styleUrls: ['./add-product-form-classic.component.css'],
  providers:[CategoryService,ProductService]
})
export class AddProductFormClassicComponent implements OnInit {

  constructor(private categoryService:CategoryService , private productService: ProductService,private alertifyService:AlertifyService) { }
  model: Product = new Product(); 
  categories : Category[] | undefined;

  ngOnInit(): void {   
    this.categoryService.getCategory().subscribe(data=>{
      this.categories=data;
      })
    }

    add(form:NgForm){
     this.productService.addProduct(this.model).subscribe(data=>{
       this.alertifyService.success("New Product: "+this.model.name +" Added" );
     });

    }
    
}

