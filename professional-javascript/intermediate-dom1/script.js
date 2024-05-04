const h1Element = document.querySelector("h1");
const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");

const handleInput = () => {
  if (inputElement.value.trim() !== "") {
    buttonElement.disabled = false;
    h1Element.textContent = "Welcome!";
  } else {
    buttonElement.disabled = true;
  }
};

inputElement.addEventListener("input", handleInput);

buttonElement.addEventListener("click", () => {
  // Handle button click
  // If you want to execute the same logic as input, you can call handleInput here as well.
});
