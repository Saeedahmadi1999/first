import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model/recipe.model';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css'],
})
export class RecepiesListComponent implements OnInit,OnDestroy {
  Recipe:Recipe[];
  Subscription:Subscription;
  constructor(private recipe:RecipeService) {
    
  }

  ngOnInit() {
    this.Subscription = this.recipe.newRecipe.subscribe(
      (recipe:Recipe[]) => {
        this.Recipe = recipe;
      }
    )
    this.Recipe = this.recipe.getrecipe();
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
