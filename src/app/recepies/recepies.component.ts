import { Component, OnInit} from '@angular/core';
import { Recipe } from './recipe.model/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
})
export class RecepiesComponent implements OnInit {
  selecterec: Recipe;
  
  constructor(private takeRec:RecipeService) {}

  ngOnInit(){}
}
