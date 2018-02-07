import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {ShoppinglistService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs";


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppinglistService: ShoppinglistService) {};
  private recipe: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
    ];

  setRcipes(recipes: Recipe[]) {
    this.recipe = recipes;
    this.recipesChanged.next(this.recipe.slice());
  }
  getRecipes() {
    return this.recipe.slice();
  }

  getRecipe(id: number) {
    return this.recipe[id];
  }

  addIngredientsToShoppinglis(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipe.push(recipe);
    this.recipesChanged.next(this.recipe.slice());
  }

  updateRecipe(index: number, newrecipe: Recipe) {
    this.recipe[index] = newrecipe;
    this.recipesChanged.next(this.recipe.slice());
  }

  deleteRecipe(index: number) {
    this.recipe.splice(index, 1);
    this.recipesChanged.next(this.recipe.slice());
  }
}
