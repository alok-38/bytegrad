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
  if (text.includes("#") && text.length >= 5) {
    formElement.classList.add("form--valid");
    setTimeout(() => {
      formElement.classList.remove("form--valid");
    }, 2000);
  } else {
    formElement.classList.add("form--invalid");
    setTimeout(() => {
      formElement.classList.remove("form--invalid");
    }, 2000);
    textAreaElement.focus();
    return;
  }
};

formElement.addEventListener("submit", submitHandler);

const hashTag = text.split
const company =
const upvoteCount = 0;
const daysAgo = 0;