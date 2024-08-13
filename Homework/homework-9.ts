/*  
9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un 
nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra. 
Ejemplo: 
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );  
console.log( herosWithLetterS ); // She Hulk, Spiderman
 Tip:  Para determinar si un string empieza con una letra
 let hero = ‘Spiderman';
 hero.startsWith(’S’); // true
 Si se tiene un arreglo vació, por ejemplo:
 let newHeroes = [];
 Se puede insertar en el arreglo así:
 newHeroes.push('Hulk');
*/
function heroesThatStartsWith(names: string[], letter: string) {
  let newheroes: string[] = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(letter)) {
      newheroes.push(names[i]);
    }
  }
  return newheroes;
}

let heroes = [
  "Doom",
  "Dr. Strange",
  "Hulk",
  "She Hulk",
  "Spiderman",
  "Captain Marvel",
];
let herosWithLetterS = heroesThatStartsWith(heroes, "S");
console.log(herosWithLetterS); // She Hulk, Spiderman
