var Name = "nada";
var age = 22;
var isAdmin = true;
var scores = [1, 2, 3];
var etudiant = ["nada", 22];
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var monRole = Role.Admin;
console.log(Name, age, isAdmin); // Nada 22 true
console.log(scores, "Premier score:", scores[0]);
console.log(etudiant[0], etudiant[1]); // Nada 22
console.log(monRole, Role[monRole]); // 1 Admin
