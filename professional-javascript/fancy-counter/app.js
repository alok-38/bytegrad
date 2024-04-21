const h1Element = document.querySelector(".counter__title");
const spanElement = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-button");
const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector(".counter__button--decrease");

// Function to increase the count
const increaseCount = () => {
  let currentCounterValue = parseInt(spanElement.textContent);
  // Check if the counter value is less than 5 before incrementing
  if (currentCounterValue < 5) {
    let newCounterValue = currentCounterValue + 1;
    spanElement.textContent = newCounterValue;
    // Disable the "+" button and update the h1 element if counter reaches 5
    if (newCounterValue >= 5) {
      h1Element.innerHTML = "Limit! Buy <b>Pro</b> for >5";
      // Disable both increase and decrease buttons
      increaseButton.disabled = true;
      decreaseButton.disabled = true;
      // Unfocus
      increaseButton.blur();
    }
  }
};

increaseButton.addEventListener("click", increaseCount);

// Add event listener for keydown event
document.addEventListener("keydown", (event) => {
  // Check if the pressed key is the "ArrowUp" key or spacebar and if the counter is less than 5
  if (
    (event.key === "ArrowUp" || event.key === " ") &&
    parseInt(spanElement.textContent) < 5
  ) {
    increaseCount();
  }
});

// Function to decrease the count
const decreaseCount = () => {
  let currentCounterValue = parseInt(spanElement.textContent);
  let newCounterValue = currentCounterValue - 1;
  // If the new value is less than 0
  if (newCounterValue < 0) {
    // Force it to remain at 0
    newCounterValue = 0;
  }
  // Update the displayed value in the HTML
  spanElement.textContent = newCounterValue;
  // Enable both buttons and update the title if counter drops below 5
  if (newCounterValue < 5) {
    decreaseButton.disabled = false;
    increaseButton.disabled = false;
    h1Element.textContent = "Fancy Counter";
  }
};

decreaseButton.addEventListener("click", decreaseCount);

// Function to reset
const resetCount = () => {
  spanElement.textContent = "0"; // Reset the counter value to 0
  increaseButton.disabled = false; // Ensure the increase button is enabled
  decreaseButton.disabled = false;
  h1Element.textContent = "Fancy Counter";

  // Remove the keydown event listener
  document.removeEventListener("keydown", increaseCount);
};

resetButton.addEventListener("click", resetCount);
