const textAreaElement = document.querySelector("textarea");
const spanWordElement = document.querySelector(".stat__number--words");
const spanCharElement = document.querySelector(".stat__number--characters");
const spanTwitterElement = document.querySelector(".stat__number--twitter");
const spanFacebookElement = document.querySelector(".stat__number--facebook");

const initialTwitterCharCount = parseInt(spanTwitterElement.textContent);
const initialFacebookCharCount = parseInt(spanFacebookElement.textContent);

const acceptInputAndUpdateWordCount = () => {
  const inputText = textAreaElement.value.trim();
  const wordCount = inputText
    .split(/\s+/)
    .filter((word) => word.trim().length > 1).length;
  spanWordElement.textContent = wordCount;
};

const acceptInputAndUpdateCharCount = () => {
  const inputText = textAreaElement.value;
  const charCount = inputText.length;
  spanCharElement.textContent = charCount;
};

const acceptInputAndUpdateTwitterCount = () => {
  const inputText = textAreaElement.value;
  const twitterCharCountLeft = initialTwitterCharCount - inputText.length;
  spanTwitterElement.textContent =
    twitterCharCountLeft >= 0 ? twitterCharCountLeft : 0;
};

const acceptInputAndUpdateFacebookCount = () => {
  const inputText = textAreaElement.value;
  const facebookCharCountLeft = initialFacebookCharCount - inputText.length;
  spanFacebookElement.textContent =
    facebookCharCountLeft >= 0 ? facebookCharCountLeft : 0;
};

textAreaElement.addEventListener("input", acceptInputAndUpdateWordCount);
textAreaElement.addEventListener("input", acceptInputAndUpdateCharCount);
textAreaElement.addEventListener("input", acceptInputAndUpdateTwitterCount);
textAreaElement.addEventListener("input", acceptInputAndUpdateFacebookCount);
