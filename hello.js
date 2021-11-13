//Example 1
// const sayHello = function () {
//   console.log("Hello, world");
// }

// sayHello();

//Example 2
// const sayHello = function(name) {
//   console.log("Hello, " + name);
// }

// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");

//Example 3
const sayHelloToConsole = function (name) {
  console.log ("Hello, " + name);
}

sayHelloToConsole('John');

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John');
console.log(greeting);