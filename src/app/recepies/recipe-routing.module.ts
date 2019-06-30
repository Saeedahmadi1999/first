import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecepiesDetailComponent } from './recepies-detail/recepies-detail.component';
import { RecepiesComponent } from './recepies.component';
import { guardian } from '../auth/auth-guard.service';

const RecipeMod : Routes = [
    {path:"", component:RecepiesComponent, children:[
        {path:"new", component:RecipeEditComponent, canActivate:[guardian]},
        {path:":id", component:RecepiesDetailComponent},
        {path:":id/Edit", component:RecipeEditComponent, canActivate:[guardian]},
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(RecipeMod)],
    exports: [RouterModule]
})
export class RecipeRoutingModule {}