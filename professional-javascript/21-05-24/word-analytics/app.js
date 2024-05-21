const textAreaElement = document.querySelector("textarea");
const spanWordElement = document.querySelector(".stat__number--words");
let initialWordCount = parseInt(spanWordElement.textContent);

const acceptInputAndComputeAnalytics = () => {
  const inputText = textAreaElement.value.trim();
  const wordCount = inputText
    .split(/\s+/) // Split by any whitespace character
    .filter((word) => word.trim().length > 1).length; // Filter out words with less than 2 characters
  spanWordElement.textContent = wordCount;
};

textAreaElement.addEventListener("input", acceptInputAndComputeAnalytics);
