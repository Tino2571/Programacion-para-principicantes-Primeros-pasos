interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

let Arturo: Person = {
  age: 36,
  isActive: true,
  name: "Arturo",
};

let Jorge: Person = {
  age: 2,
  isActive: true,
  name: "Jorge",
};

let Alondra: Person = {
  age: 99999999,
  isActive: true,
  name: "Alondra",
};

let people: Person[] = [Arturo, Jorge, Alondra];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name, people[i].age);
}
