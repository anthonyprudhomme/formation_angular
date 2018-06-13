import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  createRecipe() {
    const ingredient = new Ingredient();
    ingredient.ingredientId = 1;
    ingredient.name = 'Saucisse';
    ingredient.quantity = 1;
    ingredient.unit = 'Portion';
    this.recipe.ingredients = [ingredient];
    this.recipeService.postRecipe(this.recipe);
  }

}
