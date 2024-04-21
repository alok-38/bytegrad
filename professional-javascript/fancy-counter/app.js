// Selecting DOM elements
const elements = {
  h1: document.querySelector(".counter__title"),
  span: document.querySelector(".counter__value"),
  resetButton: document.querySelector(".counter__reset-button"),
  increaseButton: document.querySelector(".counter__button--increase"),
  decreaseButton: document.querySelector(".counter__button--decrease"),
};

// Function to update counter value in DOM
const updateCounter = (value) => {
  elements.span.textContent = value;
};

// Function to handle count increase
const increaseCount = () => {
  const currentValue = parseInt(elements.span.textContent);
  if (currentValue < 5) {
    const newValue = currentValue + 1;
    updateCounter(newValue);
    if (newValue >= 5) {
      elements.h1.innerHTML = "Limit! Buy <b>Pro</b> for >5";
      disableButtons();
    }
  }
};

// Function to handle count decrease
const decreaseCount = () => {
  let currentValue = parseInt(elements.span.textContent);
  let newValue = Math.max(0, currentValue - 1);
  updateCounter(newValue);
  if (newValue < 5) {
    enableButtons();
    elements.h1.textContent = "Fancy Counter";
  }
};

// Function to disable both increase and decrease buttons
const disableButtons = () => {
  elements.increaseButton.disabled = true;
  elements.decreaseButton.disabled = true;
  elements.increaseButton.blur();
};

// Function to enable both increase and decrease buttons
const enableButtons = () => {
  elements.increaseButton.disabled = false;
  elements.decreaseButton.disabled = false;
  elements.resetButton.blur();
};

// Event listeners
elements.increaseButton.addEventListener("click", increaseCount);
elements.decreaseButton.addEventListener("click", decreaseCount);
elements.resetButton.addEventListener("click", () => {
  updateCounter(0);
  enableButtons();
  elements.h1.textContent = "Fancy Counter";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === " ") {
    increaseCount();
  } else if (event.key === "ArrowDown") {
    decreaseCount();
  }
});
