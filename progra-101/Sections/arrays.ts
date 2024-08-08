export let empleado: string[] = [
  "Fernando",
  "Melissa",
  "Arturo",
  "Jorge",
  "Faustino",
];
export let sueldo: number[] = [1500, 2000, 5000, 1, 99999999];

for (let i = 0; i < empleado.length; i++) {
  console.log(empleado[i], "tiene un sueldo de: ", sueldo[i]);
}
