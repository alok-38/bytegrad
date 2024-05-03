const textAreaElement = document.querySelector(".textarea");
const spanCharElement = document.querySelector(".stat__number--characters");

function updateCharCount() {
  const charCount = textAreaElement.value.length;
  spanCharElement.textContent = charCount;
}

// Update character count on input
textAreaElement.addEventListener("input", updateCharCount);
