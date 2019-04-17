import { Subject } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model/recipe.model';
import { ingridient } from '../ingridient/ingridient.model';
import { ShopService } from '../shoping-list/shop.service';
@Injectable()
export class RecipeService {
  newRecipe = new Subject<Recipe[]>();

  private recipe:Recipe[] = [
    new Recipe('apple', 'this is test', '../../../assets/ricardo-rocha-637025-unsplash.jpg',[
      new ingridient('bread',1),
    ]),
    new Recipe('Orange', 'testing', '../../../assets/ricardo-rocha-637025-unsplash.jpg',[
      new ingridient('meat',2),
      new ingridient('milk',2)
    ])
  ]

  constructor(private slservice:ShopService) {}

  getrecipe() {
    return this.recipe.slice();
  }

  adding(ing:ingridient[]) {
    this.slservice.addfromrec(ing);
  }

  findRecipe(index:number) {
    return this.recipe[index]
  }

  update(index:number, newrec:Recipe) {
    this.recipe[index] = newrec;
    this.newRecipe.next(this.recipe.slice());
  }

  add(newrec:Recipe) {
    this.recipe.push(newrec);
    this.newRecipe.next(this.recipe.slice());
  }

  delete(index:number) {
    this.recipe.splice(index,1);
    this.newRecipe.next(this.recipe.slice());
  }

  replaceRec(recipe:Recipe[]) {
    this.recipe = recipe;
    this.newRecipe.next(this.recipe.slice());
  }
}
