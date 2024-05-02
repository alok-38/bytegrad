const h1Element = document.querySelector("h1");
const countElement = document.querySelector("main > section:first-child");
const resetButton = document.querySelector(".counter__reset-button");
const decreaseButton = document.querySelector(".counter__button--decrease");
const increaseButton = document.querySelector(".counter__button--increase");

const decreaseCount = () => {
  let count = parseInt(countElement.textContent);
  if (count > 0) {
    countElement.textContent = count - 1;
  }
  if (count - 1 === 0) {
    disableButton();
  }
};

decreaseButton.addEventListener("click", decreaseCount);

const increaseCount = () => {
  let count = parseInt(countElement.textContent);
  let newCount = ++count;
  countElement.textContent = newCount;
  enableButton();
};

increaseButton.addEventListener("click", increaseCount);

const resetCount = () => {
  let count = parseInt(countElement.textContent);
  if (count > 0) {
    countElement.textContent = 0;
    disableButton();
  }
};

resetButton.addEventListener("click", resetCount);

const disableButton = () => {
  decreaseButton.disabled = true;
};

const enableButton = () => {
  decreaseButton.disabled = false;
};
