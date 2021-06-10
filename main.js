const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const body = document.querySelector("body");
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;

  clearInterval(intervalId);
});
