let presentLine = 0;

function printLineNumbers(numberOfLines: any) {
  for (let i = 0; i < numberOfLines; i++) {
    presentLine++;
    console.log("Línea #", presentLine);
  }
  presentLine = 0;
}

printLineNumbers(180);
