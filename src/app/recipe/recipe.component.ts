import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import {MatCardModule} from '@angular/material/card';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  expanded: boolean;
  constructor() { }

  ngOnInit() {
  }

  seeMore() {
    this.expanded = !this.expanded;
  }

}
