import { Product } from 'src/app/models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], category: string): Product[] {
    if (category === 'all products') {
      return value;
    }
    return value.filter(p => p.category === category);
  }

}
