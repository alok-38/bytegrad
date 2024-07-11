const textareaElement = document.querySelector('.textarea');
const wordsCountElement = document.querySelector('.stat__number--words');
const characterCountElement = document.querySelector('.stat__number--characters');
const twitterCharaterElement = document.querySelector('.stat__number--twitter');
const facebookCharaterElement = document.querySelector('.stat__number--facebook');
const valueInTextArea = textareaElement.value.trim();

const displayWordCount = () => {
	const wordCount = valueInTextArea.split(/\s+/).length;
	wordsCountElement.textContent = wordCount;
}

textareaElement.addEventListener('keydown', displayWordCount);
