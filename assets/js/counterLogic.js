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

backgroundOne.addEventListener('click', () => {
  document.body.style.backgroundImage = 'url("./assets/images/abstractOne.jpeg")';
});

backgroundTwo.addEventListener('click', () => {
  document.body.style.backgroundImage = 'url("./assets/images/abstractTwo.jpg")';
});

backgroundThree.addEventListener('click', () => {
  document.body.style.backgroundImage = 'url("./assets/images/abstractThree.jpg")';
});