const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
console.log("Début");
wait(2000).then(() => console.log("Fin"));
//methode 2
async function recuperer() {
    console.log("Début");
    await wait(2000); // pause de 2 secondes
    console.log("Fin");
}

recuperer();
