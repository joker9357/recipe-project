import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropDownDirective } from './shared/dropdown.directive';
import {ShoppinglistService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component"
import {RecipeEditComponent} from "./recipe/recipe-edit/recipe-edit.component";
import {RecipeService} from "./recipe/recipe.service";
import {DataStoreService} from "./shared/data-storage.service";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppinglistService, RecipeService, DataStoreService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
