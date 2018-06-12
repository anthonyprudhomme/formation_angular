import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { MatCardModule } from '@angular/material/card';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }
}

