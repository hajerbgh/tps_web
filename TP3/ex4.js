var user1 = {
    id: 1,
    name: "Nada",
    email: "nada@gmail.com",
    isAdmin: false,
};
var admin1 = {
    id: 2,
    name: "Rihem",
    isAdmin: true,
    permissions: ["modify", "delete"],
};
// Affichage
console.log("Utilisateur:", user1);
console.log("Administrateur:", admin1);
