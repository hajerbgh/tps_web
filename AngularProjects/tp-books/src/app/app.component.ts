import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookContainerComponent } from './components/book-container/book-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BookContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-books';
}
