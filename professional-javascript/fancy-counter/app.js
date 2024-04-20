const h1Element = document.querySelector(".counter__title");
const spanElement = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-button");
const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector(".counter__button--decrease");

// Function to increase the count
const increaseCount = () => {
  let currentCounterValue = parseInt(spanElement.textContent);
  let newCounterValue = currentCounterValue + 1;
  spanElement.textContent = newCounterValue;
  // Disable the "+" button and update the h1 element if counter reaches 5
  if (newCounterValue >= 5) {
    increaseButton.disabled = true;
    h1Element.textContent = "Please upgrade to pro";
  }
};

increaseButton.addEventListener("click", increaseCount);

// Function to decrease the count
const decreaseCount = () => {
  let currentCounterValue = parseInt(spanElement.textContent);
  let newCounterValue = currentCounterValue - 1;
  spanElement.textContent = newCounterValue;
  // Enable the "+" button and update the h1 element if counter is less than 5
  if (newCounterValue < 5) {
    increaseButton.disabled = false;
    h1Element.textContent = "Fancy Counter";
  }
};

decreaseButton.addEventListener("click", decreaseCount);

// Function to reset
const resetCount = () => {
  spanElement.textContent = "0"; // Reset the counter value to 0
  increaseButton.disabled = false; // Ensure the increase button is enabled
  h1Element.textContent = "Fancy Counter";
};

resetButton.addEventListener("click", resetCount);
