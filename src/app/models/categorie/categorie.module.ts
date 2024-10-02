import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategorieModule { 
  id:number=0;
  title:string="";
  image:string="";
  description:string="";
  available:boolean=false;
}
