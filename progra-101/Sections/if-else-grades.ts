/*
Realizar un programa que muestre la note
del alumno como: A, B, C, D,F 
donde:
A >= 90
B >= 80
C >= 70
D >= 60
F <  60
*/

export let grade = 91;
export let cal = "Insertar una calificacion valida";

if (grade > 90) {
  cal = "A+++++";
} else if (grade >= 90) {
  cal = "A";
} else if (grade >= 80) {
  cal = "B";
} else if (grade >= 70) {
  cal = "C";
} else if (grade >= 60) {
  cal = "D";
} else if (grade < 60) {
  cal = "F";
}

console.log("La nota del alumno es", cal);
