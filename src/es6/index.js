// ECMAScript 6
// Defaul Params
// antes de ECMAScript 6
function newfunction(name, age, country) {
  var name = name || "Juan";
  var age = age || 24;
  var country = country || "MX";

  console.log(name, age, country);
}
newfunction();
newfunction("Pepe", 12, "CO");
// En ECMAScript 6
function newfunction2(name = "Juan", age = 24, country = "MX") {
  console.log(name, age, country);
}
newfunction2();
newfunction2("Pepe", 12, "CO");

// Concatenacion
let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`;
console.log(`${hello} ${world}`);
console.log(epicPhrase);
// Multilineas
let lorem = `Otra frase epica que necesitamos
ahora es otra frace epica`;
console.log(lorem);

// Desestructuracion
let person = {
  name: "Juan",
  age: 23,
  country: "MX",
};
// antes de ECMAScript 6
console.log(person.name, person.age, person.country);
// En ECMAScript 6
let { name, age, country } = person;
console.log(name, age, country);

// Operador de propagacion (Spread Operator)
let team1 = ["Juan", "Luis", "Pepe"];
let team2 = ["Maria", "Diana", "Bety"];

let education = ["Cody", ...team1, ...team2];
console.log(education);

// Parametros en objetos
let name = "Juan";
let age = 23;
// ES5
obj = { name: name, age: age };
// ES6
obj2 = { name, age };
console.log(obj2);

// Arrow Functions
const names = [
  { name: "Juan", age: 24 },
  { name: "Jessica", age: 22 },
];
// ES5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
// ES6
let listOfName2 = names.map((item) => console.log(item.name));
// otra forma
const listOfNames3 = (name, age, country) => {};
// otra otra forma
const listOfNames4 = (name) => {};
const square = (num) => num * num;

// Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola!"))
  .catch((error) => console.log(error));

// Clases
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sumar(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new Calculator();
console.log(calc.sumar(5, 6));

// Importar
import { hello } from "./module.js";
hello();

// Generadores
function* helloWorld() {
  if (true) {
    yield "Hello";
  }
  if (true) {
    yield "World";
  }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
