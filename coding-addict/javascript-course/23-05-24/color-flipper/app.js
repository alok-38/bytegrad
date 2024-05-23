const spanElement = document.querySelector("span");
const buttonElement = document.querySelector("button");
const bodyElement = document.querySelector("body");

const colorFlipper = () => {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  const randomNumber = Math.floor(Math.random() * colors.length);
  spanElement.textContent = colors[randomNumber];
  bodyElement.style.backgroundColor = colors[randomNumber]; // Set the background color to the selected color
};

buttonElement.addEventListener("click", colorFlipper);
