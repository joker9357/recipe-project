import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';
import {ShoppinglistService} from '../shopping-list.service';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;
  subscription: Subscription;
  constructor(private shoppinglistService: ShoppinglistService) { }

  onSubmitItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if ( this.editMode ) {
      this.shoppinglistService.updateIngredient(this.editedItemIndex, ingredient);
    }else {
      this.shoppinglistService.addIngredient(ingredient);
    }
    this.editMode = false;
    this.slForm.reset();

  }
  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startedEditing.subscribe((id: number) => {
      this.editMode = true;
      this.editedItemIndex = id;
      this.editedIngredient = this.shoppinglistService.getIngredient(this.editedItemIndex);
      this.slForm.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
