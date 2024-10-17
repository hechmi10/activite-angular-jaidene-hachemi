import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  id: number=0;
  name: string='';
  image:string='';
  categoryId: number=0;
  description : string='';
  price: number=0; 
  brand:string=''; 
  promotion : number=0; 
 }
