"use strict";

function fibonacci() {
  let counter = 0;
  let Number1 = 1;
  let Number2 = 1;
  const myFunction = function () {
    if(counter < 2) {
        counter++;
        return 1; 
    }
    let result = Number1 + Number2;
    Number1 = Number2;
    Number2  = result;
    counter++;
    return result;
  };
  return myFunction;
}





const fib = fibonacci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());


// const fibonacci = function makeFibonacciFunction() {
//     let previousNumber = 0;
//     let nextNumber = 1;

//     return function () {
//         let result = previousNumber + nextNumber;
//         previousNumber = nextNumber;
//         nextNumber = result;
//     };

// function fibonacci() {
//   let Number1 = 1;
//   let Number2 = 1;
//   let counter = 0;

//   const makeFibonacciFunction = function() {
//     // if (counter < 2) {
//     //   counter++;
//     //   return 1;
//     // }
//     // let result = Number1 + Number2;
//     // Number2 = result;
//     // Number1 = Number2;
//     // return result;
//     counter++;
//     return counter;
//   };
//   return makeFibonacciFunction();
// }

// const f = fibonacci();
// const f1 = f();
// const f2 = f()
// console.log(f1);
// console.log(f2);

// const increment = fibonacci();

// const c1 = increment();
// console.log(c1);

// let val1 = 2;
// function multiplyThis(n) {
//   let ret = n * val1;
//   return ret;
// }
// let multiplied = multiplyThis(6);
// console.log("example of scope:", multiplied);
