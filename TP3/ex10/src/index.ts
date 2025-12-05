import { Repository } from './repositories/Repository';
import { fetchBooks } from './services/ApiService';
import { Library } from './library/Library';
import { User } from './models/User';
import { Admin } from './models/Admin';
import type { Book } from './models/Book';

async function main() {
  // Repositories
  const booksRepo = new Repository<Book>();
  const usersRepo = new Repository<any>(); // any ici représente Person (User|Admin)

  // Charger des livres depuis l'API fictive
  const books = await fetchBooks();
  books.forEach((b) => booksRepo.add(b));

  // créer bibliothèque
  const lib = new Library(booksRepo, usersRepo);

  // créer utilisateurs
  const user1 = new User(1, 'Nada');
  const admin1 = new Admin(2, 'Rihem');

  usersRepo.add(user1);
  usersRepo.add(admin1);

  console.log('Livres disponibles initialement:');
  console.table(lib.listAvailableBooks());

  // recherche
  console.log("Recherche 'clean':", lib.findBooksByTitle('clean'));

  // emprunt
  console.log('\n Nada emprunte le livre id=3 (Clean Code)...');
  lib.borrowBook(1, 3);
  console.log('Livres disponibles après emprunt:');
  console.table(lib.listAvailableBooks());
  console.log('Livres empruntés par Nada :', user1.borrowedBookIds);

  // tentative d'emprunt par Admin (devrait échouer)
  try {
    console.log('\nAdmin tente d\'emprunter id=1 (doit échouer)...');
    lib.borrowBook(2, 1);
  } catch (err) {
    console.error('Erreur attendue:', (err as Error).message);
  }

  // rendre
  console.log('\n Nadarend le livre id=3...');
  lib.returnBook(1, 3);
  console.log('Livres disponibles après retour:');
  console.table(lib.listAvailableBooks());
  console.log('Livres empruntés par Nada:', user1.borrowedBookIds);
}

main().catch((err) => {
  console.error('Erreur dans main:', err);
});
