import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model/recipe.model';



@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  form:FormGroup; 
  array: AbstractControl[]; 

  constructor(private route:ActivatedRoute, 
              private serveice: RecipeService,
              private Router:Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.formating();
        this.array = (<FormArray>this.form.get('ingridient')).controls;
      }
    );
  }
  
  submit() {
    const newRec = new Recipe(
      this.form.value['name'],
      this.form.value['description'],
      this.form.value['image'],
      this.form.value['ingridient']) 
    if(this.editMode) {
      this.serveice.update(this.id,newRec);
    } else {
      this.serveice.add(newRec);
    }
    this.cansel();
  }

  cansel() {
    this.Router.navigate(['../'], {relativeTo: this.route})
  }

  addIng() {
    (<FormArray>this.form.get('ingridient')).push(
      new FormGroup({
        'name': new FormControl("",Validators.required),
        'amunt': new FormControl("",[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  delIng(index:number) {
    (<FormArray>this.form.get('ingridient')).removeAt(index);
  }

  formating() {
    let name = "";
    let img = "";
    let des = "";
    let recipeingridient = new FormArray([]);
    
    if(this.editMode) {
      const rec = this.serveice.getrecipe()[this.id];
      name = rec.name;
      img = rec.imgPath;
      des = rec.desc;
      if(rec['ingridients']) {
        for(let ingr of rec.ingridients) {
          recipeingridient.push(
            new FormGroup({
              'name': new FormControl(ingr.name,Validators.required),
              'amunt': new FormControl(ingr.amunt,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.form = new FormGroup({
      "name": new FormControl(name,Validators.required),
      "image": new FormControl(img,Validators.required),
      "description": new FormControl(des,Validators.required),
      "ingridient" : recipeingridient
    })
  }
}
