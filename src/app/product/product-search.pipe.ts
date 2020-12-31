import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: Product[], searchText?: any): Product[] 
  {
    searchText = searchText?searchText.toLocaleLowerCase():null

    return searchText?value.filter((p:Product)=>p.name?.toLocaleLowerCase().indexOf(searchText)!==-1):value;
  }

}
