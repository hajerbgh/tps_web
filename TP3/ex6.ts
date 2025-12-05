class Person{
    name : string;
    age : number;
    constructor(name: string, age : number){
        this.name=name;
        this.age=age;
    }
    greet() {
        console.log("Bonjour, je m'appelle ",this.name);
    }
}
class Student extends Person{
    school : string;
    constructor(name:string,age:number,school:string){
        super(name,age);
        this.school=school;
    }
}
// Test Person et Student
const p1 = new Person("Nada", 22);
p1.greet();  // Bonjour, je m'appelle Nada

const s1 = new Student("Rihem", 20, "FST");
s1.greet();  
console.log(`${s1.name} étudie à ${s1.school}`);


abstract class Shape{
    abstract area() : number;
}
class Circle extends Shape{
    rayon : number;
    constructor(rayon: number){
        super();
        this.rayon= rayon;
    }
    area() : number{
        return this.rayon*this.rayon*Math.PI;
    }
}
class Rectangle extends Shape{
    Longueur : number;
    largeur : number;
    constructor(Longueur : number,largeur : number){
        super();
        this.Longueur=Longueur;
        this.largeur=largeur;
        
    }
    area() : number{
        return this.Longueur*this.largeur;
    }
}
// Test Shape
const c1 = new Circle(5);
console.log("Surface du cercle:", c1.area());

const r1 = new Rectangle(4, 6);
console.log("Surface du rectangle:", r1.area());

interface Drivable{
    drive() : void;
}
class Car implements Drivable{
    drive(){
        console.log("driving");
    }
}

// Test Car
const car1 = new Car();
car1.drive();