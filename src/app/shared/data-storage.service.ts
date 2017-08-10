import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipe/recipe.service";
import {Recipe} from "../recipe/recipe.module";
import {AuthService} from "../auth/auth.service";
@Injectable()
export class DataStoreService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}
  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://course-project-6b9b2.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://course-project-6b9b2.firebaseio.com/recipes.json?auth=' + token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients'] ) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {

        this.recipeService.setRcipes(recipes);
      });
  }
}
