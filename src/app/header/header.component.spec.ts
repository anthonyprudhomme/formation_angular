import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterModule, Routes} from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RecipesComponent } from '../recipe/recipes/recipes.component';
import { RecipeCreateComponent } from '../recipe/recipe-create/recipe-create.component';
import { RecipeUpdateComponent } from '../recipe/recipe-update/recipe-update.component';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const routes: Routes = [
    {
      path: 'recipes',
      component: RecipesComponent
    },
    {
      path: 'recipe/add',
      component: RecipeCreateComponent
    },
    {
      path: 'recipe/update/:id',
      component: RecipeUpdateComponent
    },
    {
      path: 'recipe/:id',
      component: RecipeDetailComponent
    },
    {
      path: '**',
      redirectTo: 'recipes'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterModule.forRoot(routes),
        CustomMaterialModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
