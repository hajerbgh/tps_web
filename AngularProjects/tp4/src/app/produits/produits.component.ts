import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
      produits = [
    { nom: 'Ordinateur', stock: 70 },
    { nom: 'Clavier', stock: 35 },
    { nom: 'Souris', stock: 10 }
  ];
   augmenterStock(p: any) {
    p.stock++;
  }

  diminuerStock(p: any) {
    if (p.stock > 0) {
      p.stock--;
    }
  }
}
