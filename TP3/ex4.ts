interface User {
  id: number;
  name: string;
  email?: string;
  readonly isAdmin: boolean;
}

let user1: User = {
  id: 1,
  name: "Nada",
  email: "nada@gmail.com",
  isAdmin: false,
};

interface Admin extends User {
  permissions: string[];
}

let admin1: Admin = {
  id: 2,
  name: "Rihem",
  isAdmin: true,
  permissions: ["modify", "delete"],
};

// Affichage
console.log("Utilisateur:", user1);
console.log("Administrateur:", admin1);