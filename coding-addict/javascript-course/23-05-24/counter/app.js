const increaseButtonElement = document.querySelector(".increase");
const decreaseButtonElement = document.querySelector(".decrease");
const resetButtonElement = document.querySelector(".reset");
const spanElement = document.querySelector("span");

let count = 0;

const increaseCount = () => {
  count++;
  spanElement.textContent = count;
};

const decreaseCount = () => {
  count--;
  spanElement.textContent = count;
};

const resetCount = () => {
  count = 0;
  spanElement.textContent = count;
};

increaseButtonElement.addEventListener("click", increaseCount);
decreaseButtonElement.addEventListener("click", decreaseCount);
resetButtonElement.addEventListener("click", resetCount);
