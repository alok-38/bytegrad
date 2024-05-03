const textAreaElement = document.querySelector(".textarea");
const spanCharElement = document.querySelector(".stat__number--characters");
const spanWordElement = document.querySelector(".stat__number--words");
const spanTwitterElement = document.querySelector(".stat__number--twitter");
const spanFacebookElement = document.querySelector(".stat__number--facebook");

function updateCharCount() {
  const charCount = textAreaElement.value.length;
  spanCharElement.textContent = charCount;
}

// Update character count on input
textAreaElement.addEventListener("input", () => {
  updateCharCount();
  updateWordCount();
  updateTwitterCharLimit(); // Update Twitter character limit on input
  updateFacebookCharLimit();
});

// Word count function
function updateWordCount() {
  const text = textAreaElement.value.trim(); // Remove leading and trailing spaces
  const words = text.split(/\s+/).filter((word) => word !== ""); // Split text into words

  // Filter out single characters and spaces
  const validWords = words.filter((word) => word.length > 1);

  const wordCount = validWords.length;
  spanWordElement.textContent = wordCount;
}

// Twitter character limit
function updateTwitterCharLimit() {
  const charCount = textAreaElement.value.length;
  const charCountLeft = 280 - charCount; // Twitter's character limit is 280
  spanTwitterElement.textContent = charCountLeft;
}

// Update char limit on backspace
textAreaElement.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    updateTwitterCharLimit();
  }
});

// Facebook character limit
function updateFacebookCharLimit() {
  const charCount = textAreaElement.value.length;
  const charCountLeft = 2200 - charCount; // Facebook's character limit is 280
  spanFacebookElement.textContent = charCountLeft;
}

// Update char limit on backspace
textAreaElement.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    updateFacebookCharLimit();
  }
});
