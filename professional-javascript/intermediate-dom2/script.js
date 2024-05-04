const h1Element = document.querySelector("h1");
const buttonElement = document.querySelector("button");

const changeMessage = () => {
  let message = "Goodbye";
  if (h1Element.textContent === "Hello") {
    h1Element.textContent = message;
  } else {
    h1Element.textContent = "Hello";
  }
};

buttonElement.addEventListener("click", changeMessage);
