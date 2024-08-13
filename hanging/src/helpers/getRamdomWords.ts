let words: string[] = [
  "COMPUTADORA",
  "AGUACATE",
  "PERRO",
  "SANGUINARIO",
  "ORION",
  "PARANGARICUTIRIMICUARO",
  "ESCUELA",
  "INTENTO",
  "VEHICULO",
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
