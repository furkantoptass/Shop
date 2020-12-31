import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormControl } from '@angular/forms';
import { Product } from '../product';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-add-product-form-reactive',
  templateUrl: './add-product-form-reactive.component.html',
  styleUrls: ['./add-product-form-reactive.component.css'],
  providers : [CategoryService, ProductService],
})
export class AddProductFormReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, 
    private categoryService : CategoryService, 
    private productService : ProductService,
    private alertifySevice : AlertifyService,
      
    )  { 

  
    }

    productAddForm:FormGroup;
    product:Product=new Product();
    categories: Category[]=[];

  

  createproductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      desciription:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required],
      
    });
  }

  ngOnInit(): void {

    this.createproductAddForm();

    this.categoryService.getCategory().subscribe(data=>{
      this.categories=data;
      })
  }



  add(){
    console.log("Olta geldi")
    if(this.productAddForm?.valid)
    {
      this.product=Object.assign({},this.productAddForm.value)
     
    }

    this.productService.addProduct(this.product).subscribe(data=>{
    this.alertifySevice.success("New Product: "+this.product.name +" Added" );
  });
  }

  
}





