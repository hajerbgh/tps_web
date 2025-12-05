import { Person } from './Person';
import type { Role } from './Role';

export class Admin extends Person {
  constructor(id: number, name: string) {
    super(id, name);
  }

  getRole(): Role {
    return 'Admin';
  }

  // Méthodes spécifiques à Admin peuvent être ajoutées ici
}
