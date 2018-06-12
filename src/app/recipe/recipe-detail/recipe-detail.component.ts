import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  expanded = false;
  received = false;
  id: string;

  constructor(private recipeService: RecipeService, route: ActivatedRoute) {
    route.params.subscribe(p => this.id = p.id);
  }

  ngOnInit() {
    this.recipeService.getRecipe(this.id).subscribe(recipe => {this.recipe = recipe; this.received = true; } );
  }

  seeMore() {
    this.expanded = !this.expanded;
  }

}
