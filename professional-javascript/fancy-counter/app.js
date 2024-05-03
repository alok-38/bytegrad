const h1Element = document.querySelector("h1");
const countElement = document.querySelector("main > section:first-child");
const resetButton = document.querySelector(".counter__reset-button");
const decreaseButton = document.querySelector(".counter__button--decrease");
const increaseButton = document.querySelector(".counter__button--increase");

let h1Content = h1Element.textContent;
let h1Color = h1Element.style.color;

const decreaseCount = () => {
  let count = parseInt(countElement.textContent);
  if (count > 0) {
    countElement.textContent = count - 1;
    if (count === 5) {
      h1Element.textContent = h1Content;
      h1Element.style.color = h1Color;
      enableButton(increaseButton);
    }
    if (count === 1) {
      disableButton(decreaseButton);
    }
  }
};

const increaseCount = () => {
  let count = parseInt(countElement.textContent);
  let newCount = count + 1;
  countElement.textContent = newCount;

  if (newCount >= 5) {
    disableButton(increaseButton);
    h1Element.innerHTML = "Limit! Buy <b>Pro</b> for &gt;5";
    h1Element.style.color = "orangered";
    document.removeEventListener("keydown", handleKeyboardEvent);
  }

  if (newCount > 0) {
    enableButton(decreaseButton);
    document.addEventListener("keydown", handleKeyboardEvent);
  }
};

const resetCount = () => {
  countElement.textContent = 0;
  disableButton(decreaseButton);
  enableButton(increaseButton);
  h1Element.textContent = h1Content;
  h1Element.style.color = h1Color;
  document.addEventListener("keydown", handleKeyboardEvent); // Reattach keyboard event listener
};

const handleKeyboardEvent = (event) => {
  if (
    (event.key === " " || event.key === "ArrowUp") &&
    parseInt(countElement.textContent) < 5
  ) {
    increaseCount();
  } else if (
    event.key === "ArrowDown" &&
    parseInt(countElement.textContent) > 0
  ) {
    decreaseCount();
  }
};

document.addEventListener("keydown", handleKeyboardEvent);

decreaseButton.addEventListener("click", decreaseCount);
increaseButton.addEventListener("click", increaseCount);
resetButton.addEventListener("click", resetCount);

const disableButton = (button) => {
  button.disabled = true;
};

const enableButton = (button) => {
  button.disabled = false;
};
