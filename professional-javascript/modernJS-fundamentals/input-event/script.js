const inputElement = document.querySelector("input");
const paraElement = document.getElementById("values");

const acceptInput = () => {
  paraElement.textContent = inputElement.value;
};

inputElement.addEventListener("input", acceptInput);
