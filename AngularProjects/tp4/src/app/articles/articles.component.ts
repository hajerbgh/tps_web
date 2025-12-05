import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles = [
    { titre: 'Angular 19 est sorti', contenu: 'Découvrez les nouveautés.', importance: 'élevée' },
    { titre: 'Les directives Angular', contenu: 'Comprendre *ngIf et *ngFor.', importance: 'moyenne' },
    { titre: 'Projet étudiant', contenu: 'TP sur les directives.', importance: 'faible' }
  ];

  newTitre = '';
  newContenu = '';

  ajouterArticle() {
    if (this.newTitre && this.newContenu) {
      this.articles.push({
        titre: this.newTitre,
        contenu: this.newContenu,
        importance: 'moyenne' // valeur par défaut pour éviter les erreurs
      });
      this.newTitre = '';
      this.newContenu = '';
    }
  }
}
