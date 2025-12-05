import type { Role } from './Role';


export abstract class Person {
  constructor(
    public readonly id: number, 
    public name: string
) {}

  abstract getRole(): Role;
}
