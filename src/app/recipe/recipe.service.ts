import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { HttpHeaders } from '@angular/common/http';
import { Ingredient } from './ingredient.model';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _baseUrl = 'http://10.0.1.55:8080/api/v1/recipes';
  id: number;
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this._baseUrl);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${ this._baseUrl }/${ id }`);
  }

  postRecipe(recipe: Recipe) {
    this.http.post(this._baseUrl, recipe).subscribe(
      result => {console.log(result); },
      err => console.log(err),
      () => console.log('Fetching complete for Server Metrics')
    );
  }
}
