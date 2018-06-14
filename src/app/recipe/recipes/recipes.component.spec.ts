import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesComponent } from './recipes.component';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { MatCardModule } from '@angular/material/card';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { RecipeService } from '../recipe.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
