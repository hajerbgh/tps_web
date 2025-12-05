import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [CommonModule, FormsModule],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  imageUrl: string = '/assets/produit.jpeg';
  @Input() nomProduit: string = 'Produit Par Défaut';
  @Output() ajouterAuPanier = new EventEmitter<string>();
  
  enStock: boolean = true;
  prix: number = 1299.99;

  // Remplace alert par emission vers le parent
  ajouterProduit() {
    this.ajouterAuPanier.emit(this.nomProduit);
  }

  toggleStock(): void {
    this.enStock = !this.enStock;
  }
}
