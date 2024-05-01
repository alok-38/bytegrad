// Selecting the textarea element
const textareaElement = document.querySelector(".textarea");
const firstSpanInAside = document.querySelector("aside span:nth-child(1)");
const secondSpanInAside = document.querySelector(
  "aside > div:nth-child(2) > span"
);
const thirdSpanInAside = document.querySelector(
  "aside > div:nth-child(3) > span"
);
const fourthSpanInAside = document.querySelector(
  "aside > div:nth-child(4) > span"
);

const handleTextAreaInput = () => {
  if (textareaElement.value.includes("<script>")) {
    alert("You can't use <script> in your text.");
    textareaElement.value = textareaElement.value.replace("<script>", "");
  }
  const textAreaInput = textareaElement.value.trim();
  console.log(textAreaInput);
};

textareaElement.addEventListener("input", handleTextAreaInput);
