import { ingridient } from '../ingridient/ingridient.model';
import { Subject } from 'rxjs';

export class ShopService {
  ingridients: ingridient[] = [
    new ingridient('apple', 5),
    new ingridient('tommato', 10),
  ]
  getting = new Subject<number>();

  constructor() { }

  addIngridient(featur:ingridient) {
    this.ingridients.push(featur);
  }

  addfromrec(item:ingridient[]) {
    this.ingridients.push(...item)
  }

  getIng(index:number) {
    return this.ingridients[index]
  }

  delIng(index:number) {
    this.ingridients.splice(index,1);
  }

  update(index:number, newIng) {
    this.ingridients[index] = newIng;
  }
}
