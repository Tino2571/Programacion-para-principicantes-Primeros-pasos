/*  
8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el  
nombre que tenga más letras del arreglo, y debe de trabajar así: 
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 
let hero = largestNameOfArray( heroes ); 
console.log( hero ); // Profesor Charles Xavier 
*/
function largestNameOfArray(array: string[]) {
  let largest = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > array[largest].length) {
      largest = i;
    }
  }

  return array[largest];
}

let heroes = ["Deadpool", "Ciclope", "Magneto", "Profesor Charles Xavier"];
let hero = largestNameOfArray(heroes);
console.log(hero); // Profesor Charles Xavier
