let Name : string ="nada";
let age : number = 22;
let isAdmin : boolean = true;
let scores : number[] = [1,2,3];
let etudiant : [string,number] = ["nada",22];
enum Role {
    User,
    Admin,
    SuperAdmin,
}
let monRole: Role = Role.Admin;


console.log(Name, age, isAdmin);           // Nada 22 true
console.log(scores, "Premier score:", scores[0]); 
console.log(etudiant[0], etudiant[1]);     // Nada 22
console.log(monRole, Role[monRole]);       // 1 Admin
