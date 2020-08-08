// Object.entries - nos permite devovler la clave y los valores de una matris
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  desing: "Ana",
};
console.log(data);
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); //length - cuantos elementos tenemos

// Object.values() - nos ayuda a devolver solo los valores del objeto
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  desing: "Ana",
};
const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding (relleno) - nos puede ayudar a complementar un String
const string = "hello";
console.log(string.padStart(8, "hi "));
console.log(string.padEnd(12, " ------"));

// Async y Await - funciones asincronas
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World!!"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

// Async y Await - otra forma

const otherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

otherFunction();
