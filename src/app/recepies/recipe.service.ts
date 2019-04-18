import { Subject } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model/recipe.model';
import { ingridient } from '../ingridient/ingridient.model';
import { ShopService } from '../shoping-list/shop.service';
@Injectable()
export class RecipeService {
  newRecipe = new Subject<Recipe[]>();

  private recipe:Recipe[] = [
    new Recipe('apple', 'this is test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbVRaO-ckLMP3WZ2o5zBFRCY9DGv5d2jAHk_BJJG4-4_Z3Kxl',[
      new ingridient('test',1),
    ]),
    new Recipe('Orange', 'testing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyw7yA4S_2LAsRwi1P23VfRKvigSl1Q1v6bUYIs5lz0_xZKC9i-w',[
      new ingridient('test1',2),
      new ingridient('test2',2)
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
