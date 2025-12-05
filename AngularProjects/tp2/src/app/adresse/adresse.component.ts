import { Component } from '@angular/core';

@Component({
  selector: 'app-adresse',
  imports: [AdresseComponent],
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent {
  rue = '123 Rue Exemple';
}
