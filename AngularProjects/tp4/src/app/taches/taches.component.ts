import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taches',
  imports: [CommonModule],
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent {
  taches = [
    { description: 'Faire les devoirs', completee: false, priorite: 'haute' },
    { description: 'Aller au sport', completee: true, priorite: 'basse' },
    { description: 'Lire un livre', completee: false, priorite: 'moyenne' }
  ];

  toggleTache(t: any) {
    t.completee = !t.completee;
  }
  viderTaches() {
  this.taches = []; // ← Angular détecte le changement
}

}
