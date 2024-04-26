const textareaElement = document.querySelector('.textarea');
const wordsSpanElement = document.querySelector('.stat__number--words');
const charsSpanElement = document.querySelector('.stat__number--characters');
const twitterStats = document.querySelector('.stat__number--twitter');
const facebookStats = document.querySelector('.stat__number--facebook');

let spaceBarCount = 0;
const twitterCharacterLimit = parseInt(twitterStats.textContent);
const facebookCharacterLimit = parseInt(facebookStats.textContent);

const updateCounts = () => {
	const text = textareaElement.value.trim();

	// Update word count
	const words = text.split(/\s+/).filter(word => word.length > 0);
	wordsSpanElement.textContent = words.length || 0;

	// Update character count
	charsSpanElement.textContent = text.length + spaceBarCount;

	// Update Twitter character count
	const remainingTwitterCharacters = twitterCharacterLimit - text.length - spaceBarCount;
	twitterStats.textContent = remainingTwitterCharacters >= 0 ? remainingTwitterCharacters : 0;

	// Update Facebook
	const remainingFacebookCharacters = facebookCharacterLimit - text.length - spaceBarCount;
	facebookStats.textContent = remainingFacebookCharacters >= 0 ? remainingFacebookCharacters : 0;
};

// Add event listener for input events on textarea
textareaElement.addEventListener('input', updateCounts);

// Add event listener for keydown events
textareaElement.addEventListener('keydown', (event) => {
	if (event.key === ' ') {
		spaceBarCount++;
	} else if (event.key === 'Backspace') {
		if (spaceBarCount > 0) {
			spaceBarCount--; // Decrement spaceBarCount by 1
		}
	}
	updateCounts();
});
