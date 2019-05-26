import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecepiesComponent } from './recepies.component';
import { RecepiesListComponent } from './recepies-list/recepies-list.component';
import { RecepiesDetailComponent } from './recepies-detail/recepies-detail.component';
import { RecepieItemComponent } from './recepies-list/recepie-item/recepie-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeRoutingModule } from './recipe-routing.module';


@NgModule({
    declarations: [
      RecepiesComponent,
      RecepiesListComponent,
      RecepiesDetailComponent,
      RecepieItemComponent,   
      RecipeStartComponent,
      RecipeEditComponent,
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RecipeRoutingModule
    ],
    providers: []
})

export class RecipeModule {

}