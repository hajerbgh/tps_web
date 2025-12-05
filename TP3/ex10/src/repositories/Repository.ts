/** Repository générique en mémoire */


export class Repository<T extends { id: number }> {
  
  //utilise Map pour stocker ts les objets avec leur id comme clé
  private items = new Map<number, T>();
  //Ajoute un nouvel elt dans  repository
  add(item: T): void {
    if (this.items.has(item.id)) {
      //Erreur si un objet avec le même id existe déjà
      throw new Error(`Item with id=${item.id} already exists`);
    }
    this.items.set(item.id, item);
  }


  //Récupère un elt par son id
  getById(id: number): T | null {
    //null si aucun objet ne correspond
    return this.items.get(id) ?? null;
  }


  //met à jour un élt 
  update(item: T): void {
    if (!this.items.has(item.id)) {
        //Erreur si aucun objet avec cet id n'existe
      throw new Error(`Item with id=${item.id} not found`);
    }
    this.items.set(item.id, item);
  }
  //supprime un élt par son id
  remove(id: number): void {
    this.items.delete(id);
  }

  //récupère ts les élts stockés dans le repository
  //return Un tableau contenant tous les objets
  getAll(): T[] {
    return Array.from(this.items.values());// Convertit la Map en tableau
  }
  /**
   * Recherche des éléments correspondant à un critère.
   // predicate - Une fonction qui retourne true pour les objets à garder
   * returns Un tableau des objets qui correspondent au critère
   */
  find(predicate: (item: T) => boolean): T[] {
    return this.getAll().filter(predicate);
  }
}
