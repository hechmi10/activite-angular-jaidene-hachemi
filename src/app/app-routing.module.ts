import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,children:[
    {path:'details/:id',component:DetailsCategoryComponent},
    {path:'productsCategory/:id',component:ProductsCategoryComponent},
    {path:'productsCategoryQP',component:ProductsCategoryQPComponent}
    
  ]},
  {path:'product',loadChildren:()=>import('./products/products.module').then(p=>p.ProductsModule)},
  {path:'apropos',loadChildren:()=>import('./apropos/apropos.module').then(a=>a.AproposModule)},
  {path:'contact',loadChildren:()=>import('./contact/contact.module').then(c=>c.ContactModule)},
  {path:'profile',loadChildren:()=>import('./profile/profile.module').then(pr=>pr.ProfileModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},
  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
