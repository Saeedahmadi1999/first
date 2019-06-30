import { ShopService } from './../shop.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ingridient } from 'src/app/ingridient/ingridient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f', { static: true }) slform: NgForm;
  editingMode = false;
  subsription: Subscription;
  ingrid:ingridient;
  index:number;
  constructor(private newIng:ShopService) { }

  ngOnInit() {
    this.subsription = this.newIng.getting.subscribe(
      (index:number) =>{
        this.editingMode = true;
        this.index = index;
        this.ingrid = this.newIng.getIng(index);
        this.slform.setValue({
          name:this.ingrid.name,
          amount:this.ingrid.amunt
        })
      }
    )
  }
  
  addbtn(form:NgForm) {
    const value = form.value;
    const newIngrident = new ingridient(value.name,value.amount);
    if(this.editingMode) {
      this.newIng.update(this.index,newIngrident)
      this.editingMode = false;
    } else {
      this.newIng.addIngridient(newIngrident);
    }
    form.reset();
  }

  delete() {
    if(this.editingMode) {
      this.newIng.delIng(this.index);
      this.slform.reset();
      this.editingMode = false;
    }else {
      this.slform.reset();
    }
  }

  clear() {
    this.slform.reset();
    this.editingMode = false;
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }

}
