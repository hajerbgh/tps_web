let id : number | string ;
id = 12;
//id = "ABC"
type A = {matiere : string};
type B = {coefficient : number};
type C = A & B;
let personne : C = {
    matiere : "math",
    coefficient : 2
}
console.log("Personne:", personne);

type Status  = "pending" | "done" | "canceled";
let tache : Status = "canceled";
console.log("Tâche:", tache);

let unknownValue: unknown = "Bonjour";
let strLength  = (unknownValue as string).length;
console.log("Longueur de la chaîne:", strLength );
