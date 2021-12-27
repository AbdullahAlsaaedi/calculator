const numKeysArr = document.querySelectorAll(".keys__num");
const displayEl = document.querySelector(".result");
const plusEl = document.querySelector(".keys__plus");
const minusEl = document.querySelector(".keys__minus");
const mutliplyEl = document.querySelector(".keys__multiply");
const divideEl = document.querySelector(".keys__divide");
const resultEl = document.querySelector(".keys__result");
const delEl = document.querySelector(".keys__del");
const resetEl = document.querySelector(".keys__reset");
const pointEl = document.querySelector(".keys__point");

let number = "";
let numberpicked = "";

for (let i = 0; i < numKeysArr.length; i++) {
  numKeysArr[i].addEventListener("click", function () {
    number += numKeysArr[i].textContent;
    displayEl.textContent = number;
  });
}

plusEl.addEventListener("click", function () {
  if (number.length == 0) return;
  if (isNaN(number.charAt(number.length - 1))) {
    number = number.slice(0, -1);
  }
  number += "+";
  displayEl.textContent = number;
});

minusEl.addEventListener("click", function () {
  if (number.length == 0) return;
  if (isNaN(number.charAt(number.length - 1))) {
    number = number.slice(0, -1);
  }
  number += "-";
  displayEl.textContent = number;
});
mutliplyEl.addEventListener("click", function () {
  if (number.length == 0) return;
  if (isNaN(number.charAt(number.length - 1))) {
    number = number.slice(0, -1);
  }
  number += "*";
  displayEl.textContent = number;
});
divideEl.addEventListener("click", function () {
  if (number.length == 0) return;
  if (isNaN(number.charAt(number.length - 1))) {
    number = number.slice(0, -1);
  }
  number += "/";
  displayEl.textContent = number;
});

delEl.addEventListener("click", function () {
  number = number.slice(0, -1);
  displayEl.textContent = number;
});

resetEl.addEventListener("click", function () {
  number = "";
  displayEl.textContent = "";
});

pointEl.addEventListener("click", function () {
  number = number + ".";
  displayEl.textContent = number;
});

resultEl.addEventListener("click", function () {
  if (isNaN(number.charAt(number.length - 1))) {
    return;
  }

  number = eval(number);
  if (isFinite(number)) {
    number = String(parseFloat(parseFloat(number).toFixed(4)));
    displayEl.textContent = number;
  } else {
    displayEl.textContent = "Syntax error";
    number = "";
  }
});
