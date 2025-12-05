function add(a, b) {
    return a + b;
}
function greet(name, age) {
    if (age != undefined) {
        console.log("Bonjour ".concat(name, "!"));
    }
    else {
        console.log("Bonjour ".concat(name, ", tu as ").concat(age, " ans."));
    }
}
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    return Math.pow(base, exp);
}
function combine(a, b) {
    return a + b;
}
console.log("add(5, 3) =", add(5, 3)); // 8
greet("Nada"); // Bonjour Nada!
greet("Nada", 22); // Bonjour Nada, tu as 22 ans.
console.log("power(2) =", power(2)); // 4 (exp par défaut 2)
console.log("power(2,3) =", power(2, 3)); // 8
console.log("combine(10, 20) =", combine(10, 20)); // 30
console.log("combine('Hello', ' TypeScript') =", combine("Hello", " TypeScript")); // Hello TypeScript
