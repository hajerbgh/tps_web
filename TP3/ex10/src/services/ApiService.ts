import type { Book } from '../models/Book';

/**
 * Service API fictif qui renvoie une liste de livres (simulé avec Promise+setTimeout)
 */
export async function fetchBooks(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: true },
        { id: 2, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', year: 1943, available: true },
        { id: 3, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, available: true }
      ]);
    }, 200); // latence simulée
  });
}
