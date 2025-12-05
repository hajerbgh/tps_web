import { Person } from './Person';
import type { Role } from './Role';

export class User extends Person {
  //Liste IDs des livres empruntés par l'utilisateurs
  public borrowedBookIds: number[] = [];

  constructor(id: number, name: string) {
    super(id, name);
  }

  getRole(): Role {
    return 'User';
  }
  //Méthode permettant d'emprunter un livre.
   //Ajoute ID du livre à la liste s'il n'est pas déjà présent.
  borrow(bookId: number) {
    if (!this.borrowedBookIds.includes(bookId)) {
      this.borrowedBookIds.push(bookId);
    }
  }

  //Méthode permettant de rendre un livre.
   //Supprime l'ID du livre de la liste des emprunts.
  returnBook(bookId: number) {
    this.borrowedBookIds = this.borrowedBookIds.filter((id) => id !== bookId);
  }
}
