import { OrderByPipe } from './order-by.pipe';
import { Recipe } from './recipe.model';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();

    const mockRecipes = [];

    const recipeA = new Recipe();
    recipeA.name = 'aaaa';
    const recipeZ = new Recipe();
    recipeZ.name = 'zzzz';

    mockRecipes.push(recipeZ);
    mockRecipes.push(recipeA);

    const resultRecipes = [];
    resultRecipes.push(recipeA);
    resultRecipes.push(recipeZ);

    expect(pipe.transform(mockRecipes, true, true)).toBe(resultRecipes);
  });
});
