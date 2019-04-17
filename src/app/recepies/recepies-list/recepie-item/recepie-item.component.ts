import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model/recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() rec: Recipe;
  @Input() id:number;
  constructor(private recive:RecipeService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
  }

  click() {
    this.id = this.recive.getrecipe().indexOf(this.rec);
    this.router.navigate([this.id], {relativeTo:this.route});
  }
}
