import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { RecipeUpdateComponent } from './recipe/recipe-update/recipe-update.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
