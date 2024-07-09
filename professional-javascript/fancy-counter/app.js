const headingElement = document.querySelector(".counter__title");
const spanElement = document.querySelector(".counter__value");
const resetButtonElement = document.querySelector(".counter__reset-button");
const decreaseButtonElement = document.querySelector(
  ".counter__button--decrease"
);
const increaseButtonElement = document.querySelector(
  ".counter__button--increase"
);
const mainElement = document.querySelector(".counter");

// Initial counter value
let count = 0;
let headingColor = headingElement.style.color;

const handleCountChange = () => {
  spanElement.textContent = count;

  // Adjust heading color based on count value
  if (count >= 5) {
    headingElement.style.color = "red";
    mainElement.style.backgroundColor = "transparent"; // Adjust as needed
    increaseButtonElement.disabled = true;
    decreaseButtonElement.disabled = true;
  } else {
    headingElement.style.color = headingColor; // Restore original heading color
    mainElement.style.backgroundColor = ""; // Restore original background color
    increaseButtonElement.disabled = false;
    decreaseButtonElement.disabled = false;
  }
};

const increaseCount = (event) => {
  if ((event.keyCode === 32 || event.keyCode === 38) && count < 5) {
    event.preventDefault(); // Prevent default behavior
    count++;
    handleCountChange();
  }
};

const handleClick = () => {
  count++;
  handleCountChange();
};

const resetCount = () => {
  count = 0;
  handleCountChange();
};

const decreaseCount = (event) => {
  if (event.keyCode === 40 && count > 0) {
    event.preventDefault(); // Prevent default behavior
    count--;
    handleCountChange();
  }
};

// Event listeners
document.addEventListener("keydown", increaseCount);
increaseButtonElement.addEventListener("click", handleClick);
resetButtonElement.addEventListener("click", resetCount);
document.addEventListener("keydown", decreaseCount); // Attach to document or specific element
decreaseButtonElement.addEventListener("click", decreaseCount); // If needed for mouse click support
