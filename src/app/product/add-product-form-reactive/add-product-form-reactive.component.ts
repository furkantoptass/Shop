import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Product } from '../product';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-add-product-form-reactive',
  templateUrl: './add-product-form-reactive.component.html',
  styleUrls: ['./add-product-form-reactive.component.css'],
  providers: [CategoryService, ProductService],
})
export class AddProductFormReactiveComponent implements OnInit {
  

  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifySevice: AlertifyService,
    //public productAddForm : FormGroup

  ) {}

  // productAddForm = new FormGroup({
  //   name: new FormControl() ,
  //   desciription: new FormControl(),
  //   imageUrl: new FormControl(),
  //   price: new FormControl(),
  //   categoryId: new FormControl()
  // });

   productAddForm: FormGroup; //Look at me
  //Look at me


  product: Product = new Product();
  categories: Category[] = [];



  createproductAddForm() {

    this.productAddForm = this.formBuilder.group({
      name: [null, Validators.required],
      desciription: [null, Validators.required],
      imageUrl: [null, Validators.required],
      price: [null, Validators.required],
      categoryId: [null, Validators.required],

    });

  
  }

  ngOnInit(): void {

  
    this.createproductAddForm();

    
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data;
    })
  }





  add() {
    console.log("Olta geldi")
    if (this.productAddForm?.valid) {
      this.product = Object.assign({}, this.productAddForm.value)

    }

    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifySevice.success("New Product: " + this.product.name + " Added");
    });
  }


}






