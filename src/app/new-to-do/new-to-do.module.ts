import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewToDoPageRoutingModule } from './new-to-do-routing.module';

import { NewToDoPage } from './new-to-do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewToDoPageRoutingModule
  ],
  declarations: [NewToDoPage]
})
export class NewToDoPageModule {}
