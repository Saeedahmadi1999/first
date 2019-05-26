import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { ShopingListComponent } from './shoping-list.component';

@NgModule({
  declarations:[
    ShopingListComponent,
    ShopingEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})

export class ShopingModule {}