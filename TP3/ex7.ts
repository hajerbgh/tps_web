function identity<T>(value : T): T {
    return value;
}
console.log(identity<number>(25));
console.log(identity<string>("hello"));

function getFirst<T>(arr : T[]): T | undefined  {
    return arr[0];
}
const myArray : Array<number> = [1,2,4];
console.log(getFirst([10, 20, 30]));
console.log(getFirst(["a", "b", "c"]));

class Repository<T>{
    private items : T[] = [];
    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        //garder les éléments pour lesquels la condition est vraie 
        this.items = this.items.filter(i => i !== item);
    }
    getAll(): T[] {
    return this.items;
  }
}
// Exemple avec des nombres
const numberRepo = new Repository<number>();
numberRepo.add(1);
numberRepo.add(2);
console.log(numberRepo.getAll()); // [1, 2]
numberRepo.remove(2);
console.log(numberRepo.getAll()); 
// Exemple avec des chaînes
const stringRepo = new Repository<string>();
stringRepo.add("Nada");
stringRepo.add("Rihem");
console.log(stringRepo.getAll()); 


interface ApiResponse<T>{
    data : T;
    error?: string;

}


// Exemple avec des utilisateurs
interface User {
  id: number;
  name: string;
}

let successResponse: ApiResponse<User> = {
  data: { id: 1, name: "Nada" }
};

let errorResponse: ApiResponse<User> = {
  data: { id: 0, name: "" },
  error: "User not found"
};