import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewToDoPage } from './new-to-do.page';

const routes: Routes = [
  {
    path: '',
    component: NewToDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewToDoPageRoutingModule {}
