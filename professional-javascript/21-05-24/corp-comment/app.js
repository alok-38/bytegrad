const textAreaElement = document.querySelector("textarea");
const counterElement = document.querySelector(".counter");
let initialCharCount = parseInt(textAreaElement.getAttribute("maxlength"));

const textAreaInputCharsLeft = () => {
  const acceptInputValue = textAreaElement.value;
  let finalCharCount = initialCharCount - acceptInputValue.length;
  counterElement.textContent = finalCharCount;
};

textAreaElement.addEventListener("input", textAreaInputCharsLeft);
