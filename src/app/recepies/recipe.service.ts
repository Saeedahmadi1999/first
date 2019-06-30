import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model/recipe.model';
import { ingridient } from '../ingridient/ingridient.model';
import { ShopService } from '../shoping-list/shop.service';

@Injectable()
export class RecipeService {
  newRecipe = new Subject<Recipe[]>();

  private recipe:Recipe[] = [
    new Recipe('Pasta', 'Peel and finely slice the garlic and chilli (halve and deseed it first if you don’t want the sauce too hot). Pick the basil leaves off the stalks and put to one side. Finely chop the stalks. Cook the spaghetti in a large pan of boiling salted water according to packet instructions. Meanwhile, put a large saucepan on a medium heat and add 2 good lugs of oil. Add the garlic, chilli and basil stalks and give them a stir. When the garlic begins to brown slightly, add most of the basil leaves and scrunch in the tomatoes. Turn the heat up high and stir for 1 minute. Taste and season with sea salt and black pepper, if needed. Drain the spaghetti, reserving a mugful of cooking water, then transfer it to the pan of sauce and stir well. Add a splash of pasta cooking water to loosen, if needed, then taste and season to perfection. Divide the pasta between bowls, or put it on the table in a large serving dish and let everyone help themselves. Roughly tear over the remaining basil leaves and finely grate over the Parmesan.', 'https://images.unsplash.com/photo-1548247661-3d7905940716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',[
      new ingridient('spaghetti',2),
      new ingridient('tomato',5),
      new ingridient('oil',1),
      new ingridient('pepper',7),
    ]),
    new Recipe('Pizza', 'In large bowl, dissolve yeast and sugar in water; let stand for 5 minutes. Add oil and salt. Stir in flour, a cup at a time, until a soft dough forms. Turn onto floured surface; knead until smooth and elastic, about 2-3 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 45 minutes. Meanwhile, cook beef and onion over medium heat until no longer pink; drain. Punch down dough; divide in half. Press each into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil; spread over each crust. Top with beef mixture, green pepper and cheese. Bake at 400° for 25-30 minutes or until crust is lightly browned.', 'https://images.unsplash.com/photo-1523476467467-16477f18dba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',[
      new ingridient('onion',1),
      new ingridient('sugar',1),
      new ingridient('oil',1),
      new ingridient('flour',3),
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
