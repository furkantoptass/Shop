import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private categoryService: CategoryService) { }

  title = "Category";


  categories: Category[] | undefined;

  ngOnInit(): void {

    
    this.categoryService.getCategory().subscribe(data=>{
      this.categories=data;
  })
}

}
