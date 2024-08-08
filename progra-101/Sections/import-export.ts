import { Resta, Suma, Multiplica, Divide } from "../../Helpers/math-helpers";

let n1 = 10;
let n2 = 20;

let total1: number = Suma(n1, n2);
let total2: number = Resta(n1, n2);
let total3: number = Multiplica(n1, n2);
let total4: number = Divide(n1, n2);

console.log("suma:", total1);
console.log("resta:", total2);
console.log("multi:", total3);
console.log("div:", total4);
