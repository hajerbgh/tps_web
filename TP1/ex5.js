const livre = {
    titre : "les misérables",
    auteur : "victor hugo",
    annee: "1862",
    getInfo() {
        return `${this.titre} écrit par ${this.auteur} en ${this.annee}`;
    }
}

console.log(livre.getInfo());
