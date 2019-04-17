import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepiesDetailComponent } from './recepies/recepies-detail/recepies-detail.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipeStartComponent } from './recepies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { guardian } from './auth/auth-guard.service';

const router:Routes = [
  {path:"", redirectTo:"/recipe", pathMatch:"full"},
  {path:"recipe", component:RecepiesComponent, children:[
    {path:"", component:RecipeStartComponent},
    {path:"new", component:RecipeEditComponent, canActivate:[guardian]},
    {path:":id", component:RecepiesDetailComponent},
    {path:":id/Edit", component:RecipeEditComponent, canActivate:[guardian]},
  ]},
  {path:"shoping", component:ShopingListComponent},
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule { 

}
