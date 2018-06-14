import { TestBed, inject } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrToArrayPipe } from './str-to-array.pipe';
import { RecipeComponent } from './recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './order-by.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';

describe('RecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService]
    });
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
