"use strict";

const button = document.getElementById("submit");
const formResult = document.getElementById("form-result");

function calculator(num1, s, num2) {
  let x1 = Number(num1);
  let x2 = Number(num2);

  switch (s) {
    case "+":
      return x1 + x2;
    case "-":
      return x1 - x2;
    case "*":
      return x1 * x2;
    case "/": {
      if (x2 == 0) {
        return "Операция некорректна!";
      }
      return x1 / x2;
    }
    case "":
      return "Не введен знак!";
  }
  return "Программа не поддерживает такую операцию!";
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  const first = document.getElementById("first").value;
  const second = document.getElementById("second").value;
  const symbol = document.getElementById("symbol").value;
  let result;

  if (first == "") {
    result = "Первое число не указано!";
  } else if (second == "") {
    result = "Второе число не указаано!";
  } else if (isNaN(first) || isNaN(second)) {
    result = "Некорректный ввод чисел!";
  } else {
    result = calculator(first, symbol, second);
  }

  formResult.innerText = result;
  // console.log(result);
});
