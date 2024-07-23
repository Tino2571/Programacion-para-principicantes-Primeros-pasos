export function printLineNumbers(numberOfLines: any) {
  let presentLine = 0;

  for (let i = 0; i < numberOfLines; i++) {
    presentLine++;
    console.log("Línea #", presentLine);
  }
}

printLineNumbers(180);
