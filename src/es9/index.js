// Operador de reposo - Extrae las propiedades de un objeto que aun no se a contruido
const obj = {
  name: "Juan",
  age: 23,
  country: "MX",
};

let { name, ...all } = obj;
console.log(name, all);

// Unir dos objetos
const obj = {
  name: "Juan",
  age: 23,
};
const obj1 = {
  ...obj,
  country: "MX",
};
console.log(obj1);

// Finally - nos permite ejecutar un bloque de codigo al terminar la promesa
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello World") : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
