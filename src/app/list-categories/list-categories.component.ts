import { Component } from '@angular/core';
import { CategorieModule } from '../models/categorie/categorie.module';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent {
  categories: CategorieModule[] = [
    { "id": 1, "title": "Grand électroménager", "image": "/assets/images/categorie_electromenager.jpg", "description": "Electroménager de grands tiers", "available": true }, 
    { "id": 2, "title": "Petit électroménager", "image": "/assets/images/categorie_petit_electromenager.jpg", "description": "Electroménager de petits tiers", "available": true }, 
    { "id": 3, "title": "Produits informatiques", "image": "/assets/images/categorie_produits_informatiques.jpg", "description": "PCs,consoles,etcs", "available": true }, 
    { "id": 4, "title": "Smart Phones", "image": "/assets/images/categorie_smartPhone.jpg", "description": "Des smartphones extensives", "available": true }, 
    { "id": 5, "title": "TV, images et son", "image": "/assets/images/categorie_tv_image_son.jpg", "description": "Télévisions avancés", "available": true }, 
    { "id": 6, "title": "Produits voiture", "image": "/assets/images/produits_nettoyages.jpg", "description": "Nettoyage plus efficace", "available": false }
  ];
  titre:string="";
  afficherDescription(description:string){
    alert(description);
  };
  isTitle(title: string): boolean {
    return this.titre === '' || title.toLowerCase().includes(this.titre.toLowerCase());
  }
}


