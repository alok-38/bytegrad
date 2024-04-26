// const textareaElement = document.querySelector('.textarea');
// const wordsSpanElement = document.querySelector('.stat__number--words');
// const charsSpanElement = document.querySelector('.stat__number--characters');
// const twitterStats = document.querySelector('.stat__number--twitter');
// const facebookStats = document.querySelector('.stat__number--facebook');

// const updateWordCount = () => {
// 	const text = textareaElement.value.trim();
// 	// Split text into words
// 	const words = text.split(/\s+/);
// 	// Filter out single characters
// 	const filteredWords = words.filter(word => word.length > 1);
// 	// Check if there are any words remaining after filtering
// 	if (filteredWords.length > 0) {
// 		// Count the number of words
// 		const wordCount = filteredWords.length;
// 		// Update word count
// 		wordsSpanElement.textContent = wordCount;
// 	} else {
// 		// If no complete word is found, set word count to 0
// 		wordsSpanElement.textContent = 0;
// 	}
// };

// // Add event listener for input events on textarea
// textareaElement.addEventListener('input', updateWordCount);

// const updateCharCount = () => {
// 	const text = textareaElement.value.trim();
// 	const characters = [...text];
// 	// Count the number of chars
// 	const charCount = characters.length;
// 	// Update the char count
// 	charsSpanElement.textContent = charCount;
// }

// // Add event listener for input events on textarea
// textareaElement.addEventListener('keyup', updateCharCount);

const textareaElement = document.querySelector('.textarea');
const wordsSpanElement = document.querySelector('.stat__number--words');
const charsSpanElement = document.querySelector('.stat__number--characters');

let spaceBarCount = 0;

const updateCounts = () => {
	const text = textareaElement.value.trim();

	// Update word count
	const words = text.split(/\s+/).filter(word => word.length > 1);
	wordsSpanElement.textContent = words.length || 0;

	// Update character count
	charsSpanElement.textContent = text.length + spaceBarCount;
};

// Add event listener for input events on textarea
textareaElement.addEventListener('input', updateCounts);

// Add event listener for keydown events
textareaElement.addEventListener('keydown', (event) => {
	if (event.key === ' ') {
		spaceBarCount++;
		updateCounts();
	}
});

// Add event listener for keyup events
textareaElement.addEventListener('keyup', (event) => {
	if (event.key === ' ') {
		// Do not reset spaceBarCount here
		// We want to keep track of total spaces pressed
		updateCounts();
	}
});
