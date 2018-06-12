
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

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeCreateComponent
  ],
  providers: []
})
export class RecipeModule { }
