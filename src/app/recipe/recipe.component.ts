import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { RecipeService } from './recipe.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() delete: EventEmitter<Recipe> = new EventEmitter();
  buttonState = false;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  deleteRecipe(recipe) {
    const result = this.recipeService.deleteRecipe(recipe);

    result.subscribe(
      output => {
        this.delete.emit(this.recipe);
        console.log(output); },
      err => console.log(err)
    );
  }

  toggleState() {
    this.buttonState = !this.buttonState;
  }

}
