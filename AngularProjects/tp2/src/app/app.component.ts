import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ProfilComponent } from './profil/profil.component';
import { AdresseComponent } from './adresse/adresse.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UtilisateurComponent,ProfilComponent,AdresseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp2';

}
