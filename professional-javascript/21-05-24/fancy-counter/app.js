const h1Element = document.querySelector(".counter__title");
const spanElement = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-button");
const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector(".counter__button--decrease");
const mainElement = document.querySelector(".counter");

let initialCount = Number(spanElement.textContent);
const h1TextContent = h1Element.textContent;

const updateButtonsState = () => {
  if (initialCount <= 0) {
    decreaseButton.disabled = true;
  } else {
    decreaseButton.disabled = false;
  }

  if (initialCount >= 5) {
    increaseButton.disabled = true;
  } else {
    increaseButton.disabled = false;
  }
};

const increaseCount = () => {
  initialCount++;
  spanElement.textContent = initialCount;
  updateButtonsState();
  if (initialCount === 5) {
    h1Element.innerHTML = "Limit! Buy <b>Pro</b> for >5";
    h1Element.style.color = "orangered";
    h1Element.style.fontWeight = "bold";
    mainElement.classList.add("blur");
  }
};

increaseButton.addEventListener("click", increaseCount);

const decreaseCount = () => {
  initialCount--;
  spanElement.textContent = initialCount;
  updateButtonsState();
  if (initialCount < 5) {
    h1Element.innerHTML = h1TextContent;
    h1Element.style.color = "#1d2507";
    h1Element.style.fontWeight = "normal";
    mainElement.classList.remove("blur");
  }
};

decreaseButton.addEventListener("click", decreaseCount);

const resetCount = () => {
  initialCount = 0;
  spanElement.textContent = initialCount;
  h1Element.innerHTML = h1TextContent;
  h1Element.style.color = "#1d2507";
  h1Element.style.fontWeight = "normal";
  mainElement.classList.remove("blur");
  updateButtonsState();
};

resetButton.addEventListener("click", resetCount);

// Initial state check
updateButtonsState();
