import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from './recipe.model/recipe.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
})
export class RecepiesComponent implements OnInit {
  selecterec: Recipe;

  constructor() {
  }

  ngOnInit(){}
}
