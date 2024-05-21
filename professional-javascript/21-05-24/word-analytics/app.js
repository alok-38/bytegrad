const textAreaElement = document.querySelector("textarea");
const spanWordElement = document.querySelector(".stat__number--words");
const spanCharElement = document.querySelector(".stat__number--characters");
const spanTwitterElement = document.querySelector(".stat__number--twitter");
const spanFacebookElement = document.querySelector(".stat__number--facebook");
let initialWordCount = parseInt(spanWordElement.textContent);
let initialTwitterCharCount = parseInt(spanTwitterElement.textContent);
let initialFacebookCharCount = parseInt(spanFacebookElement.textContent);

const acceptInputAndUpdateWordCount = () => {
  const inputText = textAreaElement.value.trim();
  const wordCount = inputText
    .split(/\s+/) // Split by any whitespace character
    .filter((word) => word.trim().length > 1).length; // Filter out words with less than 2 characters
  // Update the UI
  spanWordElement.textContent = wordCount;
};

textAreaElement.addEventListener("input", acceptInputAndUpdateWordCount);

const acceptInputAndUpdateCharCount = () => {
  const inputText = textAreaElement.value;
  const charCount = inputText.length;
  spanCharElement.textContent = charCount;
};

textAreaElement.addEventListener("input", acceptInputAndUpdateCharCount);

const acceptInputAndUpdateTwitterCount = () => {
  const inputText = textAreaElement.value;
  const twitterCharCount = inputText.length;
  let twitterCharCountLeft = initialTwitterCharCount - twitterCharCount;
  spanTwitterElement.textContent = twitterCharCountLeft;
};

textAreaElement.addEventListener("input", acceptInputAndUpdateTwitterCount);

const acceptInputAndUpdateFacebookCount = () => {
  const inputText = textAreaElement.value;
  const facebookCharCount = inputText.length;
  let facebookCharCountLeft = initialFacebookCharCount - facebookCharCount;
  spanFacebookElement.textContent = facebookCharCountLeft;
};

textAreaElement.addEventListener("input", acceptInputAndUpdateFacebookCount);
