import { ingridient } from './../../ingridient/ingridient.model';
export class Recipe {
    constructor(public name:string,
                public desc:string, 
                public imgPath:string,
                public ingridients ?: ingridient[]
                ) {}
}