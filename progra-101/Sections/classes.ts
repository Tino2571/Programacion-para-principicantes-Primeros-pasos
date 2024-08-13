export class Car {
  public readonly brand: string;
  doors: number;
  fuelTank: number;
  isRunning: boolean;
  type: string;

  private readonly createdAT: number;

  constructor(brand: string, type: string) {
    this.brand = brand;
    this.doors = 0;
    this.fuelTank = 0;
    this.isRunning = false;
    this.type = type;

    this.createdAT = 1234567890;
  }

  turnOn() {
    if (this.isRunning) {
      console.log("El carro ya estaba encendido... se dañó el motor");
      return;
    }

    if (this.fuelTank <= 0) {
      console.log("El carro no tiene gasofa pa");
      return;
    }

    this.isRunning = true;
    console.log("El carro está encendido");
  }

  fillTank(gas: number) {
    if (gas < 0) {
      console.log(
        "No le puedees quitar gasolina al tanque, ingresa numeros positivos"
      );
      return;
    }

    if (this.fuelTank + gas > 100) {
      this.fuelTank = 100;
      console.log("Tanque lleno");
      return;
    }

    this.fuelTank = gas;
    console.log("El carro ahora tiene", this.fuelTank, "de combustible");
  }
}

let myMazda = new Car("Mazda", "Sedan");

console.log(myMazda);
myMazda.fillTank(100);
myMazda.turnOn();
console.log(myMazda);
