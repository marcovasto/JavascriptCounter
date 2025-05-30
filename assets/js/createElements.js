// === HTML and Body setup ===
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.margin = '0';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';

document.body.style.backgroundImage = 'url("./assets/images/abstract.jpeg")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';

// === Counter Container ===
const container = document.createElement('div');
container.style.width = '300px';
container.style.height = '300px';
container.style.border = '2px solid #88FF88';
container.style.borderRadius = '50%';
container.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
container.style.backdropFilter = 'blur(5px)';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.zIndex = '1';
container.style.overflow = 'hidden';

// === Display ===
const display = document.createElement('div');
display.textContent = '0';
display.style.fontSize = '50px';
display.style.fontWeight = 'bold';
display.style.color = '#88FF88';
display.style.marginBottom = '20px';
display.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
display.style.backdropFilter = 'blur(5px)';
display.style.padding = '10px 20px';
display.style.borderRadius = '10px';

// === Buttons Wrapper ===
const buttonsWrapper = document.createElement('div');
buttonsWrapper.style.display = 'flex';

buttonsWrapper.style.width = '100%';

// === Buttons Styles (Shared) ===
const buttonBaseStyle = {
  fontSize: '25px',
  height: '50px',
  flex: '1',
  border: '1px solid #88FF88',
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(5px)'
};

// === Button Minus ===
const btnMinus = document.createElement('button');
btnMinus.textContent = '−';
Object.assign(btnMinus.style, buttonBaseStyle);


// === Button Reset ===
const btnReset = document.createElement('button');
btnReset.textContent = 'Reset';
Object.assign(btnReset.style, buttonBaseStyle);


// === Button Plus ===
const btnPlus = document.createElement('button');
btnPlus.textContent = '+';
Object.assign(btnPlus.style, buttonBaseStyle);


// === Appendi gli elementi ===
buttonsWrapper.appendChild(btnMinus);
buttonsWrapper.appendChild(btnReset);
buttonsWrapper.appendChild(btnPlus);
container.appendChild(display);
container.appendChild(buttonsWrapper);
document.body.appendChild(container);
