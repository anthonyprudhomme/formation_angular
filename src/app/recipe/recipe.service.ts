import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { RECIPES } from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }
}
