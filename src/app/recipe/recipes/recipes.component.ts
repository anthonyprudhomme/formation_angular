import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { MatCardModule } from '@angular/material/card';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { RecipeService } from '../recipe.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  animations: [

    trigger('staggerAnim', [
      transition('void => *', [
        query('.col0',
          style({ opacity: 0, transform: 'translateX(-40px)' })
        ),

        query('.col0', stagger('250ms', [
          animate('400ms 0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.col0', [
          animate(500, style('*'))
        ]),

        query('.col1',
          style({ opacity: 0, transform: 'translateX(40px)' })
        ),

        query('.col1', stagger('250ms', [
          animate('400ms 0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.col1', [
          animate(500, style('*'))
        ]),

        query('.col2',
          style({ opacity: 0, transform: 'translateY(-40px)' })
        ),

        query('.col2', stagger('250ms', [
          animate('400ms 0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.col2', [
          animate(500, style('*'))
        ]),

        query('.col3',
          style({ opacity: 0, transform: 'translateY(40px)' })
        ),

        query('.col3', stagger('250ms', [
          animate('400ms 0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.col3', [
          animate(500, style('*'))
        ])

      ])
    ])
  ]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  sortEnabled = false;
  asc = false;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  recipeDeleted(recipe: Recipe) {
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index);
  }

  toggleSort() {
    this.sortEnabled = !this.sortEnabled;
  }

  sortBy() {
    this.asc = !this.asc;
  }
}

