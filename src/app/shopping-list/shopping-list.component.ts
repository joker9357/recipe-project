import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import {ShoppinglistService} from './shopping-list.service';
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  constructor(private shoppinglistService: ShoppinglistService) { }

  private subscription: Subscription;

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.subscription = this.shoppinglistService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(id: number) {
    this.shoppinglistService.startedEditing.next(id);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
