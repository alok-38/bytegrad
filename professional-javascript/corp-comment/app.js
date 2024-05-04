const counterElement = document.querySelector(".counter");
const submitButtonElement = document.querySelector(".submit-btn");
const textAreaElement = document.querySelector(".form__textarea");

const updateCharsLeft = () => {
  const totalCharsAvailable = parseInt(counterElement.textContent);
  const textAreaInput = textAreaElement.value.trim();
  const totalCharsLeft = totalCharsAvailable - textAreaInput.length;
  counterElement.textContent = totalCharsLeft;
};

textAreaElement.addEventListener("input", updateCharsLeft);


// submitButtonElement.addEventListener("click", numberOfCharsLeft);
