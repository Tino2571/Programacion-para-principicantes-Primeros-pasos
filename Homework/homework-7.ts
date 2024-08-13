/*  
7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar  
max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de  
trabajar así: 
let maxValue = max( 5, 2, 6); 
console.log( maxValue ); // 6 
*/

function max(a: any = 0, b: any = 0, c: any = 0) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

let maxValue = max(5, 2, 6);
console.log("El numero mayor del arreglo es:", maxValue); // 6
