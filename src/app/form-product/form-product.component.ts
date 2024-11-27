import { Component } from '@angular/core';
import { ProductModule } from '../models/product/product.module';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  model!:ProductModule;
}
