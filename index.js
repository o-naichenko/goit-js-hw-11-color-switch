// Перемикач кольорів
// Є масив кольорів в hex-форматі і кнопки Start і Stop.

{
  /* <button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button> */
}
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
// Напиши скрипт, який після натискання кнопки Start, раз в секунду змінює колір фону body на випадкове значення з масиву
// використовуючи інлайн - стиль. При натисканні на кнопку Stop, зміна кольору фону повинна зупинятися.
// ⚠️ Врахуй, на кнопку Start можна натиснути нескінченну кількість разів. Зроби так, щоб поки зміна теми запушено,
// кнопка Start була не активна. Для генерації випадкового числа (індекс елемента масиву квітів),
// використовуй функцію randomIntegerFromInterval.
const min = 0;
const max = colors.length;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector("button[data-action = start]");
const stopBtnRef = document.querySelector("button[data-action = stop]");
const bodyRef = document.body;
let intervalId = null;

startBtnRef.addEventListener("click", onStartBtnClick);
stopBtnRef.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
  intervalId = setInterval(changeBodyColor, 1000);
  startBtnRef.setAttribute("disabled", "disabled");
}

function onStopBtnClick() {
  clearInterval(intervalId);
  startBtnRef.removeAttribute("disabled");
}

function changeBodyColor() {
  bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
}
