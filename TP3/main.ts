// Import de la fonction add depuis math.ts
import { add, subtract } from './index';
import type { User } from './types';
const result = add(5, 10);
console.log(result);
console.log(subtract(5, 2)); 
const user: User = {
  id: 1,
  name: 'Nada',
};
console.log(user);
