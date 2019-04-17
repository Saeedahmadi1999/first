import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { RecipeService } from './../recipe.service';
import { Recipe } from '../recipe.model/recipe.model';



@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.css']
})
export class RecepiesDetailComponent implements OnInit {
  recDet:Recipe;
  id :number;
  

  constructor(private rec:RecipeService, private route:ActivatedRoute, private Router:Router) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((param:Params) => {
      this.id = +param["id"];
      this.recDet = this.rec.findRecipe(this.id);
    })
  }
  par = false;
  click() {
    this.par = !this.par
  }

  adding() {
    this.rec.adding(this.recDet.ingridients);
  }

  delete() {
    this.rec.delete(this.id);
    this.Router.navigate(['../'])
  }
}
