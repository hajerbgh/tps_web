const tab1=[1,2,3];
const tab2=[4,5,6];
//... sert à étaler 
const tab3 = [...tab1,...tab2];
const user = { name: "Noor", age: 10, city: "Tunis" };
const userCopy = { ...user,name: "Nada"};
console.log(userCopy);