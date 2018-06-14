import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../ingredient.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.recipeForm = this.formBuilder.group({
      name: '',
      description: '',
      picture: ''
    });
  }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  createRecipe() {
    this.recipe = this.recipeForm.value;
    this.recipe.instructions = '';
    const ingredient = new Ingredient();
    ingredient.ingredientId = 1;
    ingredient.name = 'Saucisse';
    ingredient.quantity = 1;
    ingredient.unit = 'Portion';
    this.recipe.ingredients = [ingredient];
    this.recipeService.postRecipe(this.recipe);
  }

}
