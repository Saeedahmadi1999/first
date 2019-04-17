import { StoreData } from './http.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DirDirective } from './Directive/dir.directive';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerCmponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepiesListComponent } from './recepies/recepies-list/recepies-list.component';
import { RecepiesDetailComponent } from './recepies/recepies-detail/recepies-detail.component';
import { RecepieItemComponent } from './recepies/recepies-list/recepie-item/recepie-item.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { TestComponent } from './test/test/test.component';
import { Test2Component } from './test/test2/test2.component';
import { Dir2Directive } from './Directive/dir2.directive';
import { ShopService } from './shoping-list/shop.service';
import { RecipeService } from './recepies/recipe.service';
import { RecipeStartComponent } from './recepies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { Authentication } from "./auth/Authentication";
import { guardian } from './auth/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    headerCmponent,
    RecepiesComponent,
    RecepiesListComponent,
    RecepiesDetailComponent,
    RecepieItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    TestComponent,
    Test2Component,
    DirDirective,
    Dir2Directive,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ShopService,
    RecipeService,
    StoreData,
    Authentication,
    guardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
