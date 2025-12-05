import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnChanges {
  @Input() categories: string[] = [];
  @Input() editingBook: Book | null = null;

  @Output() save = new EventEmitter<Book>();
  @Output() cancelEdit = new EventEmitter<void>();

  // local model bound to form
  bookModel: Partial<Book> = this.resetModel();

  isEditMode = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editingBook']) {
      if (this.editingBook) {
        this.bookModel = { ...this.editingBook };
        this.isEditMode = true;
      } else {
        this.bookModel = this.resetModel();
        this.isEditMode = false;
      }
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    const payload: Book = {
      id: (this.isEditMode && this.bookModel.id) ? this.bookModel.id : Date.now(),
      title: String(this.bookModel.title || '').trim(),
      author: String(this.bookModel.author || '').trim(),
      publisherEmail: String(this.bookModel.publisherEmail || '').trim(),
      publisherPhone: this.bookModel.publisherPhone ? String(this.bookModel.publisherPhone) : '',
      releaseDate: String(this.bookModel.releaseDate || ''),
      category: String(this.bookModel.category || ''),
      isAvailable: !!this.bookModel.isAvailable,
      stock: this.bookModel.stock !== undefined ? Number(this.bookModel.stock) : undefined
    };
    this.save.emit(payload);
    this.bookModel = this.resetModel();
    form.resetForm({ isAvailable: true });
    this.isEditMode = false;
  }

  onCancel(form?: NgForm) {
    this.bookModel = this.resetModel();
    this.isEditMode = false;
    this.cancelEdit.emit();
    form?.resetForm({ isAvailable: true });
  }

  private resetModel(): Partial<Book> {
    return {
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      isAvailable: true,
      stock: undefined
    };
  }
}
