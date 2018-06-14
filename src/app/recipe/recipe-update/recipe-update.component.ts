import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../ingredient.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder, route: ActivatedRoute) {
    this.createForm();
    this.recipe = new Recipe();
    let id = '';
    route.params.subscribe(p => id = p.id);
    this.recipeService.getRecipe(id).subscribe(
      p => this.recipe = p
    );

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

  updateRecipe() {
    this.recipe.name = this.recipeForm.value.name;
    this.recipe.description = this.recipeForm.value.description;
    this.recipe.picture = this.recipeForm.value.picture;
    this.recipe.instructions = '';
    const ingredient = new Ingredient();
    ingredient.ingredientId = 1;
    ingredient.name = '';
    ingredient.quantity = 1;
    ingredient.unit = '';
    ingredient.recipeId = this.recipe.id;
    this.recipe.ingredients = [ingredient];
    this.recipeService.postRecipe(this.recipe);
  }

}
