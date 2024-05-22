const formElement = document.querySelector(".form");
const textAreaElement = document.querySelector("textarea");
const counterElement = document.querySelector(".counter");
const feedbackListElement = document.querySelector(".feedbacks");
const hashtagElements = document.querySelectorAll(".hashtag");
const initialCharCount = parseInt(textAreaElement.getAttribute("maxlength"));
let feedbacks = [];

const textAreaInputCharsLeft = () => {
  const acceptInputValue = textAreaElement.value;
  const finalCharCount = initialCharCount - acceptInputValue.length;
  counterElement.textContent = finalCharCount;
};

textAreaElement.addEventListener("input", textAreaInputCharsLeft);

const submitHandler = (event) => {
  event.preventDefault();
  const text = textAreaElement.value;
  if (text.includes("#")) {
    formElement.classList.add("form--valid");
    setTimeout(() => {
      formElement.classList.remove("form--valid");
    }, 2000);
  } else {
    formElement.classList.add("form--invalid");
    setTimeout(() => {
      formElement.classList.remove("form--invalid");
    }, 2000);
  }
};

formElement.addEventListener("submit", submitHandler);
