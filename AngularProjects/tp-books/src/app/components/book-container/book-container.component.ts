import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, FormsModule, BookFormComponent, BookListComponent],
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {
  categories = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  books: Book[] = [
    { id: 1, title: 'The Duke and I', author: 'Julia Quinn', publisherEmail: 'bridgerton@example.com', publisherPhone: '98765432', releaseDate: '2000-01-05', category: 'Histoire', isAvailable: true, stock: 10 },
    { id: 2, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', publisherEmail: 'ed1@example.com', publisherPhone: '12345678', releaseDate: '1943-04-06', category: 'Roman', isAvailable: true, stock: 5 },
  ];

  // Contrôles de recherche/tri
  search = '';
  filterCategory = '';
  sortBy: 'none' | 'category' | 'availability' = 'none';

  // Edition
  editingBook: Book | null = null;

  // Called by book-form when saving (create or update)
  onSave(book: Book) {
    if (this.editingBook && this.editingBook.id === book.id) {
      // update
      this.books = this.books.map(b => b.id === book.id ? book : b);
      this.editingBook = null;
    } else {
      // create: generate id
      const newId = Date.now();
      this.books = [...this.books, { ...book, id: newId }];
    }
  }

  onEditRequest(book: Book) {
    this.editingBook = { ...book }; // copy to avoid two-way binding issues
  }

  onDeleteRequest(id: number) {
    this.books = this.books.filter(b => b.id !== id);
    if (this.editingBook?.id === id) this.editingBook = null;
  }

  // helpers for display: search / filter / sort
  get displayedBooks() {
    let res = [...this.books];

    // search filter on title or author
    if (this.search?.trim()) {
      const s = this.search.trim().toLowerCase();
      res = res.filter(b => b.title.toLowerCase().includes(s) || b.author.toLowerCase().includes(s));
    }

    // category filter
    if (this.filterCategory) {
      res = res.filter(b => b.category === this.filterCategory);
    }

    // sort
    if (this.sortBy === 'category') {
      res.sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'availability') {
      res.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }
    return res;
  }

  // compteur
  get totalCount() {
    return this.displayedBooks.length;
  }
}
