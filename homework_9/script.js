"use strict";

function makefibonacciFunction() {
  let counter = 0;
  let Number1 = 1;
  let Number2 = 1;
  let myFunction = function () {
    if (counter < 2) {
      counter++;
      return 1;
    }
    let result = Number1 + Number2;
    Number1 = Number2;
    Number2 = result;
    counter++;
    return result;
  };
  return myFunction;
}

const fibonacci = makefibonacciFunction();

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());