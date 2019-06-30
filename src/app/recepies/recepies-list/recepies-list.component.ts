import { Authentication } from './../../auth/Authentication';
import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model/recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css'],
})
export class RecepiesListComponent implements OnInit,OnDestroy {
  Recipe:Recipe[];
  Subscription:Subscription;
  newbtn:boolean;

  constructor(private recipe:RecipeService, private auth: Authentication) {
    this.newbtn = this.auth.gaurd;
  }

  ngOnInit() {
    this.Subscription = this.recipe.newRecipe.subscribe(
      (recipe:Recipe[]) => {
        this.Recipe = recipe;
      }
    )
    this.Recipe = this.recipe.getrecipe()
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
