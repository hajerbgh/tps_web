import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { WelcomeComponent } from "./welcome/welcome.component";
import { BienvenueComponent } from "./bienvenue/bienvenue.component";
import { ProduitComponent } from "./produit/produit.component";
import { PanierComponent } from './panier/panier.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PanierComponent,BienvenueComponent,ProduitComponent,UtilisateurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'project0';
  panierItems: string[] = [];

  gererAjoutAuPanier(item: string) {
    this.panierItems.push(item);
  }
}
