const textAreaElement = document.querySelector(".textarea");
const spanCharElement = document.querySelector(".stat__number--characters");
const spanWordElement = document.querySelector(".stat__number--words");

function updateCharCount() {
  const charCount = textAreaElement.value.length;
  spanCharElement.textContent = charCount;
}

// Update character count on input
textAreaElement.addEventListener("input", updateCharCount);

function updateWordCount() {
  const text = textAreaElement.value.trim(); // Remove leading and trailing spaces
  const words = text.split(/\s+/).filter((word) => word !== ""); // Split text into words

  // Filter out single characters and spaces
  const validWords = words.filter((word) => word.length > 1);

  const wordCount = validWords.length;
  spanWordElement.textContent = wordCount;
}

// Update character count on input
textAreaElement.addEventListener("input", updateWordCount);