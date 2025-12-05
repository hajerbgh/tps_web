class Etudiant{
    constructor(nom,note){
        this.nom=nom;
        this.note=note;
    }
    getMention(){
        if (this.note>=17)
        {
            return "Très bien";
        }
        else if (this.note>=14)
        {
            return "Bien";
        }
         else if (this.note>=10)
        {
            return "Passable";
        }
        else{
            return "Echec"
        }

    }
}
const Etud1= new Etudiant("sinda",18);
const Etud2= new Etudiant("Hajer",16);
const Etud3= new Etudiant("Amélie",10);
console.log("mention Etudiant 1 : ",Etud1.getMention());
console.log("mention Etudiant 2 : ",Etud2.getMention());
console.log("mention Etudiant 3 : ",Etud3.getMention());