import { Component, QueryList, ViewChildren } from '@angular/core';
import { Product2Module } from '../models/product2/product2.module';
import { ShortlistModule } from '../models/shortlist/shortlist.module';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
handleAddToShortlist($event: number) {
throw new Error('Method not implemented.');
}
  listProducts : Product2Module[]=[ 
    {"id":1,"title":"Cuisinière","image":"assets/images/grand_electromenagers/cuisinière.jpeg", "description":"699 dt", "promotion":false, "quantity":50, "categoryId":1}, 
    {"id":2,"title":"Réfrigérateur","image":"assets/images/grand_electromenagers/refrigerateur.jpeg", "description":"1500 dt", "promotion":false, "quantity":20, "categoryId":1}, 
    {"id":3,"title":"Robot Pétrin","image":"assets/images/petit_electromenager/robot_petrin.jpeg", "description":"430 dt", "promotion":false, "quantity":150, "categoryId":2}, 
    {"id":4,"title":"Fer à repasser", "image":"assets/images/petit_electromenager/fer_a_repasser.jpeg", "description":"130 dt", "promotion":false, "quantity":100, "categoryId":2}, 
    {"id":5,"title":"Oppo","image":"assets/images/smart_phones/Oppo.jpeg", "description":"920 dt", "promotion":false, "quantity":10, "categoryId":4}, 
    {"id":6,"title":"TV Téléfunkun", "image":"assets/images/tv_images_son/tv1.jpeg", "description":"845 dt", "promotion":false, "quantity":50, "categoryId":5}, 
  ] 
  shortList:ShortlistModule[]=[];
  idUser: number = 1;

  @ViewChildren(CardComponent) cardComponents!: QueryList<CardComponent>;

  handleAddToShortList(categorieId: number) {
    const exists = this.shortList.some(
      item => item.idElement === categorieId && item.idUser === this.idUser
    );
    if (!exists) {
      this.shortList.push({ id: Date.now(), idUser: this.idUser, idElement: categorieId, typeElement: 'category' });
    }
  }
}
