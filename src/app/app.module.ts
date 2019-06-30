import { FormsModule } from '@angular/forms';
import { ShopingModule } from './shoping-list/shoping.module';
import { StoreData } from './http.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';



import { DirDirective } from './Directive/dir.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerCmponent } from './header/header.component';
import { Dir2Directive } from './Directive/dir2.directive';
import { ShopService } from './shoping-list/shop.service';
import { RecipeService } from './recepies/recipe.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { Authentication } from "./auth/Authentication";
import { guardian } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    headerCmponent,
    DirDirective,
    Dir2Directive,
    SignupComponent,
    SigninComponent,
    HomeComponent,
  ],
  imports: [
    ShopingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
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
