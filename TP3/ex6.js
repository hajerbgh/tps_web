var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Bonjour, je m'appelle ", this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    return Student;
}(Person));
// Test Person et Student
var p1 = new Person("Nada", 22);
p1.greet(); // Bonjour, je m'appelle Nada
var s1 = new Student("Rihem", 20, "FST");
s1.greet();
console.log("".concat(s1.name, " \u00E9tudie \u00E0 ").concat(s1.school));
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(rayon) {
        var _this = _super.call(this) || this;
        _this.rayon = rayon;
        return _this;
    }
    Circle.prototype.area = function () {
        return this.rayon * this.rayon * Math.PI;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(Longueur, largeur) {
        var _this = _super.call(this) || this;
        _this.Longueur = Longueur;
        _this.largeur = largeur;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.Longueur * this.largeur;
    };
    return Rectangle;
}(Shape));
// Test Shape
var c1 = new Circle(5);
console.log("Surface du cercle:", c1.area());
var r1 = new Rectangle(4, 6);
console.log("Surface du rectangle:", r1.area());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving");
    };
    return Car;
}());
// Test Car
var car1 = new Car();
car1.drive();
