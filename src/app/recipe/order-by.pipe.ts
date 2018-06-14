import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './recipe.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(recipes: Recipe[], enabled: boolean, isAsc: boolean): Recipe[] {
    if (enabled) {
      if (isAsc) {
        recipes.sort(function(a, b) {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        return recipes;
      } else {
        recipes.sort(function(a, b) {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();
          return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        });
        return recipes;
      }
  } else {
      return recipes;
    }
  }

}
