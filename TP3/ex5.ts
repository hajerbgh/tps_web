function add(a : number, b: number): number{
    return a+b;
}
function greet(name : string,age?: number){
    if (age != undefined){
        console.log(`Bonjour ${name}!`);
    }
    else{
         console.log(`Bonjour ${name}, tu as ${age} ans.`);
    }
}
function power(base: number, exp: number = 2): number {
    return base ** exp;
}

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}


console.log("add(5, 3) =", add(5, 3));           // 8

greet("Nada");                                   // Bonjour Nada!
greet("Nada", 22);                               // Bonjour Nada, tu as 22 ans.

console.log("power(2) =", power(2));            // 4 (exp par défaut 2)
console.log("power(2,3) =", power(2, 3));      // 8

console.log("combine(10,20) =", combine(10, 20));           // 30
console.log("combine", combine("Hello", " Nada")); // Hello Nada