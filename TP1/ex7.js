const notes = [12, 5, 17, 9, 20];
const som = notes.reduce(
    (accumulator,currentValue) => accumulator + currentValue
,0);
const moy= som/notes.length;
console.log("la moyenne = ",moy);
const tabTrie = [...notes].sort((a, b) => b - a);
console.log("Tri :", tabTrie);

const filtered= notes.filter(n => n>=10); //n>=10 c'est la condition 
console.log(filtered);




