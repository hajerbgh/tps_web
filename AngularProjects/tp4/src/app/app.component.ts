import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { ProduitsComponent } from './produits/produits.component';
import { TachesComponent } from './taches/taches.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    LoginComponent,
    ArticlesComponent,
    ProduitsComponent,
    TachesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp4';
}
