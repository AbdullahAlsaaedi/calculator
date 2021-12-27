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
const themebtnsEl = document.querySelectorAll(".switch__btn");
const activebtnel = document.querySelector(".switch__active");

let number = "";

for (let i = 0; i < numKeysArr.length; i++) {
  numKeysArr[i].addEventListener("click", function () {
    number += numKeysArr[i].textContent;
    if (number.charAt(0) === "0" && number.length > 1) {
      number = number.substring(1, number.length);
    }
    displayEl.textContent = number;
  });
}

for (let i = 0; i < themebtnsEl.length; i++) {
  themebtnsEl[i].addEventListener("click", function () {});
}

themebtnsEl[0].addEventListener("click", function () {
  themebtnsEl[0].classList.add("switch__active");
  themebtnsEl[1].classList.remove("switch__active");
  themebtnsEl[2].classList.remove("switch__active");

  document.body.classList.remove("theme2");
  document.body.classList.remove("theme3");
  document.body.classList.add("theme1");
  document.querySelector(".header").style.color = "var(--color-key-text-2)";
  document.querySelector(".result").style.color = "var(--color-key-text-2)";
});

themebtnsEl[1].addEventListener("click", function () {
  themebtnsEl[1].classList.add("switch__active");
  themebtnsEl[0].classList.remove("switch__active");
  themebtnsEl[2].classList.remove("switch__active");

  document.body.classList.remove("theme1");
  document.body.classList.remove("theme3");

  document.body.classList.add("theme2");
  document.querySelector(".header").style.color = "var(--color-key-text-1)";
  document.querySelector(".result").style.color = "var(--color-key-text-1)";
});

themebtnsEl[2].addEventListener("click", function () {
  themebtnsEl[2].classList.add("switch__active");
  themebtnsEl[1].classList.remove("switch__active");
  themebtnsEl[0].classList.remove("switch__active");

  document.body.classList.remove("theme1");
  document.body.classList.remove("theme2");
  document.body.classList.add("theme3");

  document.querySelector(".header").style.color = "var(--color-key-text-1)";
  document.querySelector(".result").style.color = "var(--color-key-text-1)";
  resultEl.style.color = "var(--color-key-bg-3)";
});

plusEl.addEventListener("click", function () {
  if (isNaN(number.charAt(number.length - 1))) {
    number = number.slice(0, -1);
  }
  number += "+";
  displayEl.textContent = number;
});

minusEl.addEventListener("click", function () {
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
  if (isNaN(number.charAt(number.length - 1)) || number.length === 0) {
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
