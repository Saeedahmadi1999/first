import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const router:Routes = [
  {path:"", component: HomeComponent},
  {path:"recipe", loadChildren: "./recepies/recipe.module#RecipeModule"},
  {path:"shoping", component: ShopingListComponent},
  {path:"signup", component: SignupComponent},
  {path:"signin", component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule { 

}
