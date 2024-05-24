const buttonElements = document.querySelectorAll("button");
const articleElements = document.querySelectorAll("article");

const expandCardAndDisplayMinusButton = (event) => {
  const button = event.currentTarget;
  const article = button.closest(".question");

  if (!article) {
    console.error("Article not found.");
    return;
  }

  article.classList.toggle("show-text");
};

buttonElements.forEach((button) => {
  button.addEventListener("click", expandCardAndDisplayMinusButton);
});
