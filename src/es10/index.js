let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

let array = [1, 2, 3, 4, 5, 6];
console.log(array.flatMap((value) => [value, value * 2]));

let hello = "        hello world";
console.log(hello);
console.log(hello.trimStart());

let hello = "hello World       ";
console.log(hello);
console.log(hello.trimEnd());

// Transformar arreglos a objetos
let entries = [
  ["name", "oscar"],
  ["age", 32],
];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
