function identity(value) {
    return value;
}
console.log(identity(25));
console.log(identity("hello"));
function getFirst(arr) {
    return arr[0];
}
var myArray = [1, 2, 4];
console.log(getFirst([10, 20, 30]));
console.log(getFirst(["a", "b", "c"]));
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.remove = function (item) {
        //garder les éléments pour lesquels la condition est vraie 
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
// Exemple avec des nombres
var numberRepo = new Repository();
numberRepo.add(1);
numberRepo.add(2);
console.log(numberRepo.getAll()); // [1, 2]
numberRepo.remove(2);
console.log(numberRepo.getAll());
// Exemple avec des chaînes
var stringRepo = new Repository();
stringRepo.add("Nada");
stringRepo.add("Rihem");
console.log(stringRepo.getAll());
var successResponse = {
    data: { id: 1, name: "Nada" }
};
var errorResponse = {
    data: { id: 0, name: "" },
    error: "User not found"
};
