// HTML and Body setup
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.margin = '0';

document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';

document.body.style.backgroundImage = 'url("./assets/images/abstractOne.jpeg")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';
document.body.style.fontFamily = "'Orbitron', sans-serif";

// Counter Container
const container = document.createElement('div');

container.style.width = '300px';
container.style.height = '300px';

container.style.border = '2px solid #88FF88';
container.style.borderRadius = '50%';

container.style.backgroundColor = 'rgba(20, 20, 20, 0.3)';
container.style.backdropFilter = 'blur(4px)';

container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

container.style.overflow = 'hidden';

// Display
const display = document.createElement('div');

display.textContent = '0';
display.style.fontSize = '50px';
display.style.fontWeight = 'bold';
display.style.color = '#88FF88';

// Buttons Wrapper
const buttonsWrapper = document.createElement('div');
buttonsWrapper.style.display = 'flex';
buttonsWrapper.style.width = '102%'; // >100% needed to put corner border in overflow and be hidden
buttonsWrapper.style.marginTop = '20px';
buttonsWrapper.style.marginBottom = '20px';
buttonsWrapper.style.backgroundColor = 'rgba(20, 20, 20, 0.3)';
buttonsWrapper.style.backdropFilter = 'blur(4px)';

// Button Minus
const btnMinus = document.createElement('button');
btnMinus.textContent = '−';
btnMinus.style.color = '#88FF88';
btnMinus.style.fontSize = '25px';
btnMinus.style.height = '50px';
btnMinus.style.flex = '1';
btnMinus.style.border = '1px solid #88FF88';
btnMinus.style.cursor = 'pointer';
btnMinus.style.backgroundColor = 'transparent';
btnMinus.style.touchAction = 'manipulation';

// Button Reset
const btnReset = document.createElement('button');
btnReset.textContent = 'RESET';
btnReset.style.color = '#88FF88';
btnReset.style.fontSize = '25px';
btnReset.style.height = '50px';
btnReset.style.flex = '1';
btnReset.style.border = '1px solid #88FF88';
btnReset.style.cursor = 'pointer';
btnReset.style.backgroundColor = 'transparent';
btnReset.style.touchAction = 'manipulation';

// Button Plus
const btnPlus = document.createElement('button');
btnPlus.textContent = '+';
btnPlus.style.color = '#88FF88';
btnPlus.style.fontSize = '25px';
btnPlus.style.height = '50px';
btnPlus.style.flex = '1';
btnPlus.style.border = '1px solid #88FF88';
btnPlus.style.cursor = 'pointer';
btnPlus.style.backgroundColor = 'transparent';
btnPlus.style.touchAction = 'manipulation';

// Social Wrapper
const socialWrapper = document.createElement('div');
socialWrapper.style.display = 'flex';
socialWrapper.style.justifyContent = 'space-around';
socialWrapper.style.alignItems = 'center';
socialWrapper.style.width = '100%';
socialWrapper.style.marginTop = '10px';

// GitHub Icon Link
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/marcovasto';
githubLink.target = '_blank';
githubLink.rel = 'noopener';

const githubImg = document.createElement('img');
githubImg.src = 'assets/images/github.svg';
githubImg.alt = 'GitHub Icon';
githubImg.style.width = '30px';
githubImg.style.height = '30px';
githubImg.style.cursor = 'pointer';

githubLink.appendChild(githubImg);

// LinkedIn Icon Link
const linkedinLink = document.createElement('a');
linkedinLink.href = 'https://www.linkedin.com/in/marco-vasto-216621339/';
linkedinLink.target = '_blank';
linkedinLink.rel = 'noopener';

const linkedinImg = document.createElement('img');
linkedinImg.src = 'assets/images/linkedin.svg';
linkedinImg.alt = 'LinkedIn Icon';
linkedinImg.style.width = '30px';
linkedinImg.style.height = '30px';
linkedinImg.style.cursor = 'pointer';

linkedinLink.appendChild(linkedinImg);

// === Background Choice Wrapper
const backgroundWrapper = document.createElement('div');
backgroundWrapper.style.width = '300px';
backgroundWrapper.style.paddingTop = '20px';
backgroundWrapper.style.paddingBottom = '20px';
backgroundWrapper.style.marginBottom = '30px';

backgroundWrapper.style.display = 'flex';
backgroundWrapper.style.justifyContent = 'space-around';

backgroundWrapper.style.backgroundColor = 'rgba(20, 20, 20, 0.3)';
backgroundWrapper.style.backdropFilter = 'blur(4px)';
backgroundWrapper.style.border = '1px solid #88FF88';
backgroundWrapper.style.borderRadius = '5px';
backgroundWrapper.style.borderBottomLeftRadius = '100px';
backgroundWrapper.style.borderBottomRightRadius = '100px';

// Background Choice
const backgroundOne = document.createElement('div');
backgroundOne.style.width = '30px';
backgroundOne.style.height = '30px';

backgroundOne.style.borderRadius = '50%';

backgroundOne.style.backgroundImage = 'url("./assets/images/abstractOne.jpeg")';
backgroundOne.style.backgroundSize = 'cover';
backgroundOne.style.backgroundRepeat = 'no-repeat';
backgroundOne.style.backgroundPosition = 'center';

backgroundOne.style.cursor = 'pointer';

const backgroundTwo = document.createElement('div');
backgroundTwo.style.width = '30px';
backgroundTwo.style.height = '30px';

backgroundTwo.style.borderRadius = '50%';

backgroundTwo.style.backgroundImage = 'url("./assets/images/abstractTwo.jpg")';
backgroundTwo.style.backgroundSize = 'cover';
backgroundTwo.style.backgroundRepeat = 'no-repeat';
backgroundTwo.style.backgroundPosition = 'center';

backgroundTwo.style.cursor = 'pointer';

const backgroundThree = document.createElement('div');
backgroundThree.style.width = '30px';
backgroundThree.style.height = '30px';

backgroundThree.style.borderRadius = '50%';

backgroundThree.style.backgroundImage = 'url("./assets/images/abstractThree.jpg")';
backgroundThree.style.backgroundSize = 'cover';
backgroundThree.style.backgroundRepeat = 'no-repeat';
backgroundThree.style.backgroundPosition = 'center';

backgroundThree.style.cursor = 'pointer';

// Append Background Choice to Wrapper
backgroundWrapper.appendChild(backgroundOne);
backgroundWrapper.appendChild(backgroundTwo);
backgroundWrapper.appendChild(backgroundThree);

// Append Background Wrapper
document.body.appendChild(backgroundWrapper);

// === Append icons to social wrapper ===
socialWrapper.appendChild(githubLink);
socialWrapper.appendChild(linkedinLink);

// === Append elements to container ===
buttonsWrapper.appendChild(btnMinus);
buttonsWrapper.appendChild(btnReset);
buttonsWrapper.appendChild(btnPlus);

container.appendChild(display);
container.appendChild(buttonsWrapper);
container.appendChild(socialWrapper);

// === Append container to body ===
document.body.appendChild(container);


