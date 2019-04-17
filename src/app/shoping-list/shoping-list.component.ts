import { ShopService } from './shop.service';
import { Component, OnInit } from '@angular/core';
import { ingridient } from '../ingridient/ingridient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingridients: ingridient[] ;

  constructor(private ing:ShopService) { }

  ngOnInit() {
    this.ingridients = this.ing.ingridients;
  }

  putIng(index:number) {
    this.ing.getting.next(index);
  }
}
