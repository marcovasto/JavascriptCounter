// === Counter Logic ===
let counter = 0;

btnMinus.addEventListener('click', () => {
  counter--;
  display.textContent = counter;
});

btnPlus.addEventListener('click', () => {
  counter++;
  display.textContent = counter;
});

btnReset.addEventListener('click', () => {
  counter = 0;
  display.textContent = counter;
});