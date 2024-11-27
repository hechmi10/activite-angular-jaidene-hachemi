import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from '../../../activite-angular-jaidene-hachemi/a-propos.component';

const routes: Routes = [
  {path:'',component:AProposComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AproposRoutingModule { }
