import type { Book } from '../models/Book';
import type { Person } from '../models/Person';
import { User } from '../models/User';
import { Repository } from '../repositories/Repository';

export class Library {
  constructor(
    public booksRepo: Repository<Book>,
    public usersRepo: Repository<Person>
  ) {}
  //Ajouter un nouveau livre à la bibliothèque 
  addBook(book: Book): void {
    this.booksRepo.add(book);
  }

  /**Supprimer un livre par son ID */
  removeBook(bookId: number): void {
    this.booksRepo.remove(bookId);
  }
  /** Chercher des livres dont le titre contient une chaîne */
  findBooksByTitle(titlePart: string): Book[] {
    return this.booksRepo.find((b) => b.title.toLowerCase().includes(titlePart.toLowerCase()));
  }
  /** Lister tous les livres disponibles */
  listAvailableBooks(): Book[] {
    return this.booksRepo.find((b) => b.available);
  }

  /** Récupérer un livre par son ID */
  getBook(bookId: number): Book | null {
    return this.booksRepo.getById(bookId);
  }

  borrowBook(userId: number, bookId: number): void {
    const person = this.usersRepo.getById(userId);
    if (!person) throw new Error('Utilisateur introuvable');
    // Vérifier que c'est un User (pas un Admin)
    if (!(person instanceof User)) {
      throw new Error('Seuls les Users peuvent emprunter des livres');
    }

    const book = this.booksRepo.getById(bookId);
    if (!book) throw new Error('Livre introuvable');
    if (!book.available) throw new Error('Livre déjà emprunté');

    // marquer livre comme emprunté
    book.available = false;
    this.booksRepo.update(book);

    // marquer dans l'utilisateur :  ajouter le livre à la liste des emprunts de l'utilisateur
    person.borrow(bookId);
  }

  returnBook(userId: number, bookId: number): void {
    const person = this.usersRepo.getById(userId);
    if (!person) throw new Error('Utilisateur introuvable');

    if (!(person instanceof User)) {
      throw new Error('Seuls les Users peuvent rendre des livres');
    }

    const book = this.booksRepo.getById(bookId);
    if (!book) throw new Error('Livre introuvable');

    // mettre disponible
    book.available = true;
    this.booksRepo.update(book);

    // retirer  le livre de du user
    person.returnBook(bookId);
  }
}
