/* Algoritmo que imprima la tabla del 5*/

let bases = [1, 2, 3, 4, 5];

for (let a = 0; a < bases.length; a++) {
  let line = "";
  for (let b = 1; b <= 5; b++) {
    line += ` ${bases[a] * b}`;
  }
  console.log(line);
}
