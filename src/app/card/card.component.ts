import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() available!: boolean;
  @Input() btnText!: string;

  @Output() addToShortlist = new EventEmitter<number>();

  onAddToShortlist() {
    this.addToShortlist.emit(this.id);
  }

  @Output() details = new EventEmitter<number>();

  onShowDetails() {
    this.details.emit(this.id); // Emit the category ID to the parent
  }
}
