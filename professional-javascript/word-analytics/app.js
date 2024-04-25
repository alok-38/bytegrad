const textareaElement = document.querySelector('.textarea');
const wordsSpanElement = document.querySelector('.stat__number--words');
const charsSpanElement = document.querySelector('.stat__number--characters');
const twitterStats = document.querySelector('.stat__number--twitter');
const facebookStats = document.querySelector('.stat__number--facebook');

const updateWordCount = () => {
	const text = textareaElement.value.trim();
	// Split text into words
	const words = text.match(/\b\w+\b/g);
	// Count the number of words
	const wordCount = words ? words.length : 0;
	// Update word count
	wordsSpanElement.textContent = wordCount;
};

// Add event listener for input events on textarea
textareaElement.addEventListener('input', updateWordCount);

