import { Authentication } from './auth/Authentication';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recepies/recipe.service';
import { Recipe } from './recepies/recipe.model/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class StoreData {
    constructor(private http: HttpClient, private service: RecipeService, private auth: Authentication) {}
    stroe() {
        const token = this.auth.gettoken();

        return this.http.put('https://recipe-project-b4c15.firebaseio.com/data.json?auth=' + token, 
        this.service.getrecipe());
    }

    getData() {
        const token = this.auth.gettoken();

        this.http.get('https://recipe-project-b4c15.firebaseio.com/data.json?auth=' + token)
        .pipe(
            map(
                (recip: Recipe[]) => {
                    const recipe: Recipe[] = recip;
                    for (const rec of recipe) {
                        if (!rec['ingridients']) {
                            rec['ingridients'] = [];
                        }
                    }
                    return recip;
                }
            )
        )
        .subscribe(
            (recipe: Recipe[]) => {
               this.service.replaceRec(recipe);
            }
        );
    }
}
